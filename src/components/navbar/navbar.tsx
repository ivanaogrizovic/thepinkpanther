import { Link } from "react-router-dom";
import SubNavigation from "./sub-navigation/sub-navigation";
import engagementMenu from '../../assets/engagement-ring-menu.webp';
import weddingMenu from '../../assets/wedding-menu.webp';
import './navbar.scss';

function Navigation({ productList }: any) {

  //TO-DO: EXTRACT LIST FROM CONTEXT
  const shapeListTemp = ["oval", "princess", "emerald", "pear", "cushion", "round", "marquise"];
  const styleList = ["halo","solitaire", "three stone", "double halo", "straigh" ];
  const metalList = ["white gold", "yellow gold", "platinum"];

  return (
    <nav data-action='navigation'>
      <ul className='pinkpanther-navigation-list -microcopy'>
        <li className='pinkpanther-navigation-item'><Link to='shop/engagement'>Engagement Rings</Link>
          <div className='pinkpanther-sub-navigation' role='menu'>
            <ul className='pinkpanther-sub-navigation-list'>
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
            </ul>
          </div>
        </li>
        <Link className='pinkpanther-navigation-item' to='shop/coming-soon'>Wedding Rings</Link>
        <li className='pinkpanther-navigation-item'><Link to='about'>About</Link></li>
        <li className='pinkpanther-navigation-item'><Link to='book-an-appointment'>Book an appointment</Link></li>
        <li className='pinkpanther-navigation-item'><Link to='contact-us'>Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
