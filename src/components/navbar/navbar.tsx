import { useState } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

import "./navbar.scss";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="pinkpanther-navigation"
    >
      <div className="pinkpanther-navigation-controls">
        <button
          className="pinkpanther-nav-icon"
          aria-expanded={menuOpen}
          aria-controls="main-navigation-list"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <RxHamburgerMenu />
        </button>
        <Link to="/">
          <h5>The Pink Panther</h5>
        </Link>
        <button className="pinkpanther-nav-icon">
          <MdOutlineShoppingBag />
        </button>
      </div>

      <ul
        id="main-navigation-list"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`pinkpanther-navigation-list ${menuOpen ? "-visible" : "-hidden"}`}
      >
        <li className="pinkpanther-mobile-close">
          <button onClick={closeMenu} aria-label="Close menu">
            <IoCloseOutline />
          </button>
        </li>
        <li className="pinkpanther-navigation-item" onClick={closeMenu}>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="pinkpanther-navigation-item">
          <Link to={ROUTES.SHOP.ENGAGEMENT} onClick={closeMenu}>
            Engagement Rings
          </Link>
        </li>
        <li className="pinkpanther-navigation-item" onClick={closeMenu}>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li className="pinkpanther-navigation-item" onClick={closeMenu}>
          <Link to={ROUTES.BOOK}>Book an appointment</Link>
        </li>
      </ul>
    </nav>
  );
}
