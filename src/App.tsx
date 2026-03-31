import { useContext, lazy, Suspense } from "react";
import { ProductsContext } from "./context/products.context";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "./routes/routes.config";
import Header from "./components/header/header";
import Navigation from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./App.scss";

// Route-level lazy-loaded components
const Home = lazy(() => import("./routes/home"));
const Shop = lazy(() => import("./routes/shop"));
const Product = lazy(() => import("./routes/product"));
const ComingSoon = lazy(() => import("./routes/coming-soon"));
const About = lazy(() => import("./routes/about"));
const Book = lazy(() => import("./routes/book"));

export default function App() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="pinkpanther-app fade-in">
      <Header />
      <Navigation />
      <main role="main">
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
