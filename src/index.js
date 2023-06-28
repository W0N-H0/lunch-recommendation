import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalFonts from "./fonts/fonts";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>
);

const QuestionTitle = styled.div`
    font-family: "neodgm";
`;

export default QuestionTitle;