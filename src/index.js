import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyContextProvider } from './AuthProvider ';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <MyContextProvider>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </MyContextProvider>
</BrowserRouter>
);
