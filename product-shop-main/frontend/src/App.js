import React, {useState ,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/themeProvider';
import Header from './components/Header';
import { Router } from "@reach/router";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import MyAccount from './Pages/MyAccount';

  
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
 
function App() {
  const [theme] = useThemeHook();




  return (
    <div className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto' }}>
    <div className="container">
      
   
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <main >
      <Header/>
      <Router>
        <Home path="/home" />
        <Header path="/header"/>
        <Cart path="/cart" />
        <ProductDetails path="product-details/:productId"/>
        <MyAccount path="my-account" />
      </Router>
    </main>
    
    
    </div>
    </div>
  );
}
   
export default App;