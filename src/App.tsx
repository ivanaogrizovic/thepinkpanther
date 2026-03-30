import { useContext } from "react";
import { ProductsContext } from "./context/engagementRings.context";
import { Routes, Route, Navigate } from "react-router-dom";
import { Outlet } from "react-router";
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
          <Route path="/" element={<Home />} />

          <Route path="/shop">
            <Route index element={<Navigate to="/shop/engagement" replace />} />
            <Route
              path="engagement"
              element={<Shop productList={productList.products} />}
            />
            <Route path="engagement/item-detail" element={<Product />} />
            <Route path="coming-soon" element={<ComingSoon />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/book-an-appointment" element={<Book />} />
        </Routes>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
