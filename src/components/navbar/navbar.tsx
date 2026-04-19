import { useState } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import { motion, AnimatePresence } from "framer-motion";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./navbar.scss";

const NAV_ITEMS = [
  { to: ROUTES.HOME, label: "Home" },
  { to: ROUTES.SHOP.ENGAGEMENT, label: "Engagement Rings" },
  { to: ROUTES.ABOUT, label: "About" },
  { to: ROUTES.BOOK, label: "Book an appointment" },
];

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
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="main-navigation-list"
            aria-hidden={!menuOpen}
            className="pinkpanther-navigation-list"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <li className="pinkpanther-mobile-close">
              <button onClick={closeMenu} aria-label="Close menu">
                <IoCloseOutline />
              </button>
            </li>

            <li className="pinkpanther-navigation-item" onClick={closeMenu}>
              <Link to={ROUTES.HOME} className="microcopy">
                Home
              </Link>
            </li>

            <li className="pinkpanther-navigation-item" onClick={closeMenu}>
              <Link to={ROUTES.SHOP.ENGAGEMENT} className="microcopy">
                Engagement Rings
              </Link>
            </li>

            <li className="pinkpanther-navigation-item" onClick={closeMenu}>
              <Link to={ROUTES.ABOUT} className="microcopy">
                About
              </Link>
            </li>

            <li className="pinkpanther-navigation-item" onClick={closeMenu}>
              <Link to={ROUTES.BOOK} className="microcopy">
                Book an appointment
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
      <ul className="pinkpanther-navigation-list -desktop">
        {NAV_ITEMS.map((item) => (
          <li key={item.to} className="pinkpanther-navigation-item">
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
