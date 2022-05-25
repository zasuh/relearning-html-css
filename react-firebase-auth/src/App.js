import React, { useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import "./App.css";
import Form from "./Components/Common/Form";
import Home from "./Components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");
    if (authToken) navigate("/login");
  }, [navigate]);

  const onRegister = async () => {
    const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Please check the Password");
      }
      if (error.code === "auth/user-not-found") {
        toast.error("Please check the Email");
      }
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email Already in Use");
      }
    } finally {
      navigate("/home");
    }
  };

  const onLogin = async () => {
    const auth = getAuth();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Please check the Password");
      }
      if (error.code === "auth/user-not-found") {
        toast.error("Please check the Email");
      }
    } finally {
      navigate("/home");
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  return (
    <div className="App">
      <>
        <Routes>
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                onAction={onLogin}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                onAction={onRegister}
              />
            }
          />
          <Route path="/home" element={<Home logOut={logOut} />} />
        </Routes>
        <ToastContainer />
      </>
    </div>
  );
}

export default App;
