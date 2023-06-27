import styled from "styled-components"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Recomandation from './pages/Recomandation';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Recomandation" element={<Recomandation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;