
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import  "./css/index.css";
import { App } from './App/App';

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);