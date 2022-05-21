import "./App.css";
import styled from "@emotion/styled";
import FilesCard from "./components/FilesCard";

function App() {
  return (
    <Wrapper>
      <FlexContainer>
        <FilesCard />
      </FlexContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#114dbd",
});

const FlexContainer = styled.div({
  height: "100%",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default App;
