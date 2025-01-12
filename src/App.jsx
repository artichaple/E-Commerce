
import './App.css'
import React from 'react'
import {BrowserRouter ,Route, Routes}from "react-router-dom";
import Home from './Pages/Home';

import ProductPage from './Pages/ProductPage';
import Onsale from './Pages/Onsale';
import Shop from './Pages/Shop';
import NewArrivals from './Pages/NewArrivals';
import Brands from './Pages/Brands';
import Navbar from './Componants/Navbar/Navbar';
import"./App.css";


const App = () => {
  return (
    <>
  <BrowserRouter>
   <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home/>}/>
  <Route path="onsale" element={<Onsale/>}/>
  <Route path="shop" element={<Shop/>}/>
   <Route path="newarrivals" element={<NewArrivals/>}/>
<Route path="brands" element={<Brands/>}/>
  <Route path="productpage/:id" element={<ProductPage/>}/>

   
  </Routes>
  </BrowserRouter>
    </>





  );
};

export default App





