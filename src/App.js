import Home from "./pages/Home";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Home />
      <Credits>
        <p>Built & Designed by Adnan Shihabi.</p>
        <p>All rights reserved. ©</p>
      </Credits>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: rgb(15, 14, 26);
  width: 100vw;
  height: auto;

  font-family: "Monaco", sans-serif;
`;

const Credits = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  bottom: 0px;
  margin-top: 250px;
  padding-bottom: 10px;

  text-align: center;
  line-height: 2em;
  font-size: 10.5px;
  opacity: 0.65;
  color: whitesmoke;
`;
