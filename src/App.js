import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Recomandation from "./pages/Recomandation";
import "./App.css";
import React, { useRef, useState, useEffect } from "react";

// const BackgroundImage = styled.div`
//   background-image: url("/images/unnamed.png");
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

// const modalBackgroundImage = styled.div`
//   background-image: url("/images/unnamed.png");
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.6); /* Adjust the opacity as desired */
//   }
// `;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Recomandation" element={<Recomandation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
