import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import  "./css/index.css";
import { App } from './App/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);