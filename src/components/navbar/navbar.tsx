import { useState } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import { useCart } from "../../context/cart.context";
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
  const { totalItems } = useCart();

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
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="main-navigation-list"
            data-testid="mobile-menu"
            aria-hidden={!menuOpen}
            className="pinkpanther-navigation-list"
            initial={{ x: "-100%", opacity: 0.6, scale: 0.98 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "-100%", opacity: 0.6, scale: 0.98 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
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
        <button className="pinkpanther-nav-icon">
          <MdOutlineShoppingBag />
          <AnimatePresence mode="wait">
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                className="cart-badge"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </ul>
    </nav>
  );
}
