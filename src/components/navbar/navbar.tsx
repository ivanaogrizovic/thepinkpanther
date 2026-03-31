import { useState } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import "./navbar.scss";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav role="navigation" aria-label="Main navigation">
      <button
        className="pinkpanther-mobile-nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="main-navigation-list"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <RxHamburgerMenu />
      </button>

      <ul
        id="main-navigation-list"
        className={`pinkpanther-navigation-list -microcopy ${
          menuOpen ? "-visible" : "-hidden"
        }`}
      >
        {menuOpen && (
          <li className="pinkpanther-mobile-close">
            <button onClick={closeMenu} aria-label="Close menu">
              <IoCloseOutline size={32} />
            </button>
          </li>
        )}

        <li
          className="pinkpanther-navigation-item"
          onClick={closeMenu}
          role="listitem"
        >
          <Link to={ROUTES.HOME}>home</Link>
        </li>

        <li className="pinkpanther-navigation-item" role="listitem">
          <Link to={ROUTES.SHOP.ENGAGEMENT} onClick={closeMenu}>
            Engagement Rings
          </Link>
        </li>

        <li
          className="pinkpanther-navigation-item"
          onClick={closeMenu}
          role="listitem"
        >
          <Link to={ROUTES.SHOP.COMING_SOON}>Wedding Rings</Link>
        </li>

        <li
          className="pinkpanther-navigation-item"
          onClick={closeMenu}
          role="listitem"
        >
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>

        <li
          className="pinkpanther-navigation-item"
          onClick={closeMenu}
          role="listitem"
        >
          <Link to={ROUTES.BOOK}>Book an appointment</Link>
        </li>
      </ul>
    </nav>
  );
}
