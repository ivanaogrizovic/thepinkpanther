import './App.css';
import { useContext } from 'react';
import { ProductsContext } from './context/engagementRings.context';

import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router';

import Home from './routes/home';
import Shop from './routes/shop';

import Header from './components/header/header';
import Navigation from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Product from './routes/product';

function App() {

  const productList = useContext(ProductsContext);
  return (
    <div className='App'>
      <Header />
      <Navigation productList={productList.products} />
      <Routes>
        <Route path='/' element={<Home productList={productList.products} />}></Route>
        <Route path='shop/engagement' element={<Shop productList={productList.products} />}></Route>
        <Route path='shop/wedding' element={<Shop />}></Route>
        <Route path='shop/engagement/item-detail' element={<Product />}></Route>
      </Routes>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
