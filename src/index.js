import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from "react-router-dom";

import Home from './components/Home';
import AboutRoute from './components/about/AboutRoute';

// import { BrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/about', element: <AboutRoute />}
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
