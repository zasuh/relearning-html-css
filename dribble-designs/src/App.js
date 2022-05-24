import "./App.css";
import styled from "@emotion/styled";
import FilesCard from "./components/FilesCard";
import CryptoCard from "./components/CryptoCard";

function App() {
  return (
    <Wrapper>
      <FlexContainer>
        <FilesCard />
        <CryptoCard />
      </FlexContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#114dbd",
  overflow: "auto",
});

const FlexContainer = styled.div({
  height: "100%",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export default App;
