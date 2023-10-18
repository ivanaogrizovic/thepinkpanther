import React from 'react';
import './App.css';
import appLogo from './assets/pink-panther-logo.png';

import Slideshow from './components/slideshow/slideshow';
import Navigation from './components/navbar/navbar';
import ShopByCut from './components/shop-by-cut/shop-by-cut';
import ShopByStyle from './components/shop-by-style/shop-by-style';

function App() {
  
  // let firstValue: string = "Manny";
  // let firstValue: number = 34;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2,3,56];

  // //tuple
  // let aTuple: [string, number] = ["Manny", 34];

  // //enum: like an object 
  // enum Codes {first = 1, second=2};

  // //any: use it as little as you can because it accepts  any type
  // let firstName: any = "Manny";

  // //void: functions need to have a return type, and this one doesn't have any return
  // const warning =():void => {
  //   console.log("warning");
  // }

  return (
    <div className='App'>
      <header className='header'>
        <img src={appLogo} className='logo' alt='the pink panther logo' />
      </header>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <ShopByCut></ShopByCut>
      <ShopByStyle></ShopByStyle>
      {/*INFO ABOUT WARRANTY AND RETURN COMPOENT*/}
      {/*FOOTER COMPOENT*/}
    </div>
  );
}

export default App;
