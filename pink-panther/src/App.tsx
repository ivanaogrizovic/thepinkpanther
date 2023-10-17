import React from 'react';
import './App.css';
import appLogo from './assets/pink-panther-logo.png';

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
      {/* NAV BAR COMPONENT? */}
      <nav className='navigation' data-action='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'><a href=''>Engagement Rings</a>
            <div className='sub-navigation' role='menu'>
              <ul className='sub-navigation__list'>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Shape</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>Oval</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Princess</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Emerald</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Pear</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Cushion</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Round</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Marquise</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'><span className='sub-navigation__filter'>Style</span></li>
                <li className='sub-navigation__item'><span className='sub-navigation__filter'>Metal</span></li>
                <li className='sub-navigation__item'><span className='sub-navigation__filter'>Carats</span></li>
              </ul>
            </div>
          </li>
          <li className='navigation__item'><a href=''>Wedding Rings</a></li>
          <li className='navigation__item'><a href=''>Rings Sets</a></li>
          <li className='navigation__item'><a href=''>About</a></li>
        </ul>
      </nav>
      {/*SLIDESHOW COMPOENT*/}
      <section className='slideshow'>
      </section>
      {/*SHOP BY CUT COMPOENT*/}
      {/*SHOP BY STYLE COMPOENT*/}
      {/*INFO ABOUT WARRANTY AND RETURN COMPOENT*/}
      {/*FOOTER COMPOENT*/}
    </div>
  );
}

export default App;
