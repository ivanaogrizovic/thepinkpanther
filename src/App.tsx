import { useContext } from "react";
import { ProductsContext } from "./context/products.context";
import { Routes, Route, Navigate } from "react-router-dom";
import { Outlet } from "react-router";
import { ROUTES } from "./routes/routes.config";
import Home from "./routes/home";
import Shop from "./routes/shop";
import About from "./routes/about";
import Book from "./routes/book";
import Header from "./components/header/header";
import Navigation from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Product from "./routes/product";
import ComingSoon from "./routes/coming-soon";
import "./App.scss";

export default function App() {
  const productList = useContext(ProductsContext);
  return (
    <div className="pinkpanther-app fade-in">
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SHOP.ROOT}>
            <Route
              index
              element={<Navigate to={ROUTES.SHOP.ENGAGEMENT} replace />}
            />
            <Route
              path={ROUTES.SHOP.ENGAGEMENT}
              element={<Shop productList={productList.products} />}
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
  );
}
