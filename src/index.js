import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Rutas/Inicio'
import Sobre from './Rutas/Sobre'
import Contactos from './Rutas/Contactos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route index element={<Inicio/>}></Route>
      <Route path='/informacion' element={<Sobre/>}></Route>
      <Route path='/contactos' element={<Contactos/>}></Route>
      </Route>
    </Routes>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
