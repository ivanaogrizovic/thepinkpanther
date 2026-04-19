import { useContext } from "react";
import { ProductsContext } from "./context/products.context";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router";
import { ROUTES } from "./routes/routes.config";
import { motion } from "framer-motion";
import Navigation from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./routes/home";
import Shop from "./routes/shop";
import Product from "./routes/product";
import ComingSoon from "./routes/coming-soon";
import About from "./routes/about";
import Book from "./routes/book";

import "./App.scss";

export default function App() {
  const { products } = useContext(ProductsContext);
  const location = useLocation();

  return (
    <motion.section
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="pinkpanther-app fade-in">
        <Navigation />

        <main role="main">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />

            <Route path={ROUTES.SHOP.ROOT}>
              <Route
                index
                element={<Navigate to={ROUTES.SHOP.ENGAGEMENT} replace />}
              />
              <Route
                path={ROUTES.SHOP.ENGAGEMENT}
                element={<Shop productList={products} />}
              />
              <Route path={ROUTES.SHOP.ITEM_DETAIL} element={<Product />} />
              <Route path={ROUTES.SHOP.COMING_SOON} element={<ComingSoon />} />
            </Route>

            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.BOOK} element={<Book />} />
          </Routes>

          <Outlet />
        </main>
        <Footer />
      </div>
    </motion.section>
  );
}
