import React from 'react';
import './App.css';
import appLogo from './assets/pink-panther-logo.png';
import engagementMenu from './assets/engagement-ring-menu.webp';
import weddingMenu from './assets/wedding-menu.webp';
import shapeOval from './assets/shape-oval.png';
import shapePrincess from './assets/shape-princess-cut.png';
import shapeEmerald from './assets/shape-emerald-cut.png';
import shapePear from './assets/shape-pear.png';
import shapeCuscion from './assets/shape-cushion.png';
import shapeRound from './assets/shape-round.png';
import shapeMarquise from './assets/shape-marquise.png';

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
      {/* NAV BAR COMPONENT */}
      <nav className='navigation' data-action='navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'><a href=''>Engagement Rings</a>
            <div className='sub-navigation' role='menu'>
              <ul className='sub-navigation__list'>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Shape</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>
                    <img src={shapeOval} className='sub-navigation__cuts' alt='oval shape diamond cut' />Oval</a></li>
                    <li className='sub-navigation__list-2'><a href=''>
                    <img src={shapePrincess} className='sub-navigation__cuts' alt='oval shape princess cut' />Princess</a></li>
                    <li className='sub-navigation__list-2'><a href=''>
                    <img src={shapeEmerald} className='sub-navigation__cuts' alt='oval shape emerald cut' />Emerald</a></li>
                    <li className='sub-navigation__list-2'><a href=''>
                    <img src={shapePear} className='sub-navigation__cuts' alt='oval shape pear cut' />Pear</a></li>
                    <li className='sub-navigation__list-2'><a href=''>
                    <img src={shapeCuscion} className='sub-navigation__cuts' alt='oval shape cushion cut' />Cushion</a></li>
                    <li className='sub-navigation__list-2'><a href=''>
                    <img src={shapeRound} className='sub-navigation__cuts' alt='oval shape round cut' />Round</a></li>
                    <li className='sub-navigation__list-2'><a href=''>
                    <img src={shapeMarquise} className='sub-navigation__cuts' alt='oval shape marquise cut' />Marquise</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Style</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>Halo</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Solitaire</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Three Stone</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Double Halo</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Straight</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Metal</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>White Gold</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Yellow Gold</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Platinum</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Price</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>Less than 500€</a></li>
                    <li className='sub-navigation__list-2'><a href=''>500€ to 1.000€</a></li>
                    <li className='sub-navigation__list-2'><a href=''>1000€ to 2.500€</a></li>
                    <li className='sub-navigation__list-2'><a href=''>2.500€ and more</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'>
                  <img src={engagementMenu} className='sub-navigation__image' alt='the pink panther logo' />
                </li>
              </ul>
            </div>
          </li>
          <li className='navigation__item'><a href=''>Wedding Rings</a>
          <div className='sub-navigation' role='menu'>
              <ul className='sub-navigation__list'>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Women's</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>Wedding bands</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Eternity</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Stackable</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Anniversary</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Men's</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>Wedding bands</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'>
                  <span className='sub-navigation__filter'>Metal</span>
                  <ul className='sub-navigation__item-2'>
                    <li className='sub-navigation__list-2'><a href=''>White Gold</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Yellow Gold</a></li>
                    <li className='sub-navigation__list-2'><a href=''>Platinum</a></li>
                  </ul>
                </li>
                <li className='sub-navigation__item'>
                  <img src={weddingMenu} className='sub-navigation__image' alt='the pink panther logo' />
                </li>
              </ul>
            </div>
          </li>
          <li className='navigation__item'><a href=''>About</a></li>
          <li className='navigation__item'><a href=''>Book an appointment</a></li>
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
