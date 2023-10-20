import React from 'react';
import './App.css';
import engagementRings from './engagement-rings.json';

import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router';

import Home from './routes/home';
import Shop from './routes/shop';

import Header from './components/header/header';
import Navigation from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Routes>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
