import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Recomandation from "./pages/Recomandation";
import "./App.css";

const BackgroundImage = styled.div`
  background-image: url("/images/unnamed.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BackgroundImage>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Recomandation" element={<Recomandation />} />
          </Routes>
        </BackgroundImage>
      </div>
    </BrowserRouter>
  );
}

export default App;
