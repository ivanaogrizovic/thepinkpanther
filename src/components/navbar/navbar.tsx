import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubNavigation from "./sub-navigation/sub-navigation";
import engagementMenu from '../../assets/engagement-ring-menu.webp';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";


import './navbar.scss';

function Navigation({}: any) {

  //TO-DO: EXTRACT LIST FROM CONTEXT
  const shapeListTemp = ["oval", "princess", "emerald", "pear", "cushion", "round", "marquise"];
  const styleList = ["halo","solitaire", "three stone", "double halo", "straigh" ];
  const metalList = ["white gold", "yellow gold", "platinum"];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  return (
    <nav>
      <button
          className="pinkpanther-mobile-nav-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </button>
      <ul className={`pinkpanther-navigation-list -microcopy ${menuOpen ? '-visible' : '-hidden'}`}>
        <button
          className="pinkpanther-mobile-nav-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </button>
        <li className='pinkpanther-navigation-item'><Link to='/'>home</Link></li>
        <li className='pinkpanther-navigation-item'>
          <Link to='shop/engagement'>
            Engagement Rings
          </Link>
          <div className='pinkpanther-sub-navigation' role='menu'>
            <SubNavigation 
              filter="shape" 
              list={shapeListTemp}
            />
            <SubNavigation 
              filter="style" 
              list={styleList}
            />
            <SubNavigation 
              filter="metal" 
              list={metalList}
            />
            <li className='pinkpanther-sub-navigation-item'>
              <img src={engagementMenu} className='pinkpanther-sub-navigation-image' alt='' />
            </li>
          </div>
        </li>
        <li className='pinkpanther-navigation-item'><Link to='shop/coming-soon'>Wedding Rings</Link></li>
        <li className='pinkpanther-navigation-item'><Link to='about'>About</Link></li>
        <li className='pinkpanther-navigation-item'><Link to='book-an-appointment'>Book an appointment</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
