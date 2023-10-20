import React from 'react';
import './App.css';
import engagementRings from './engagement-rings.json';

import Header from './components/header/header';
import Slideshow from './components/slideshow/slideshow';
import Navigation from './components/navbar/navbar';
import ShopByCut from './components/shop-by-cut/shop-by-cut';
import ShopByStyle from './components/shop-by-style/shop-by-style';
import Footer from './components/footer/footer';

function App() {

  console.log(engagementRings);
  return (
    <div className='App'>
      <Header></Header>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <ShopByCut></ShopByCut>
      <ShopByStyle></ShopByStyle>
      <Footer></Footer>
    </div>
  );
}

export default App;
