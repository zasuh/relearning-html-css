import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home({ logOut }) {
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");
    if (authToken) navigate("/home");
    if (!authToken) navigate("/login");
  }, [navigate]);

  return (
    <div>
      Home Page{" "}
      <Button variant="contained" onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
}
