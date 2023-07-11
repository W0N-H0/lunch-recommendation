import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Recomandation from "./pages/Recomandation";
import React, { useRef, useState, useEffect } from "react";

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
