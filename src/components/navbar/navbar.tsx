import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import SubNavigation from "./sub-navigation/sub-navigation";
import engagementMenu from "../../assets/engagement-ring-menu.webp";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import "./navbar.scss";

export default function Navigation() {
  const { getUniqueValues } = useContext(ProductsContext);

  const shapeList = getUniqueValues("shape");
  const styleList = getUniqueValues("style");
  const metalList = getUniqueValues("metal");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav role="navigation" aria-label="Main navigation">
      <button
        className="pinkpanther-mobile-nav-toggle"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <RxHamburgerMenu />
      </button>

      <ul
        className={`pinkpanther-navigation-list -microcopy ${
          menuOpen ? "-visible" : "-hidden"
        }`}
        role="list"
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
          <Link to="/">home</Link>
        </li>

        <li className="pinkpanther-navigation-item" role="listitem">
          <Link to="shop/engagement" onClick={closeMenu}>
            Engagement Rings
          </Link>
          <div className="pinkpanther-sub-navigation" role="menu">
            <SubNavigation filter="shape" list={shapeList} />
            <SubNavigation filter="style" list={styleList} />
            <SubNavigation filter="metal" list={metalList} />
            <ul>
              <li className="pinkpanther-sub-navigation-item">
                <img
                  src={engagementMenu}
                  className="pinkpanther-sub-navigation-image"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </li>

        <li
          className="pinkpanther-navigation-item"
          onClick={closeMenu}
          role="listitem"
        >
          <Link to="shop/coming-soon">Wedding Rings</Link>
        </li>

        <li
          className="pinkpanther-navigation-item"
          onClick={closeMenu}
          role="listitem"
        >
          <Link to="about">About</Link>
        </li>

        <li
          className="pinkpanther-navigation-item"
          onClick={closeMenu}
          role="listitem"
        >
          <Link to="book-an-appointment">Book an appointment</Link>
        </li>
      </ul>
    </nav>
  );
}
