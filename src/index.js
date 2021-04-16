import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const items = [
  { text: "Go to the gym", done: true },
  { text: "Code", done: false },
  { text: "Code Some more", done: false }
];


ReactDOM.render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
