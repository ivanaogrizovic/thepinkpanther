import React from 'react';
import './App.css';
import engagementRings from './engagement-rings.json';
import weddingRings from './wedding-rings.json'

import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router';

import Home from './routes/home';
import Shop from './routes/shop';

import Header from './components/header/header';
import Navigation from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {

  const inventory = { engagementRings: engagementRings, weddingRings: weddingRings };
  return (
    <div className='App'>
      <Header />
      <Navigation inventory={inventory} />
      <Routes>
        <Route path='/' element={<Home inventory={inventory} />}></Route>
        <Route path='shop/engagement' element={<Shop rings={engagementRings} />}></Route>
        <Route path='shop/wedding' element={<Shop rings={weddingRings} />}></Route>
      </Routes>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
