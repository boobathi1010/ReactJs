import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { FetchData } from './component/fetchProducts';
import { Detail } from './component/productDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<FetchData/>}/>
            <Route path='/productDetails/:id' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
