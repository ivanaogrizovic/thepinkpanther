import './App.css';
import { useContext } from 'react';
import { ProductsContext } from './context/engagementRings.context';

import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router';

import Home from './routes/home';
import Shop from './routes/shop';
import About from './routes/about';
import Book from './routes/book';

import Header from './components/header/header';
import Navigation from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Product from './routes/product';
import Contact from './routes/contact';
import ComingSoon from './routes/coming-soon';

function App() {

  const productList = useContext(ProductsContext);
  return (
    <div className='App fade-in'>
      <Header />
      <Navigation productList={productList.products} />
      <Routes>
        <Route path='/' element={<Home productList={productList.products} />}></Route>
        <Route path='shop/engagement' element={<Shop productList={productList.products} />}></Route>
        <Route path='shop/coming-soon' element={<ComingSoon />}></Route>
        <Route path='shop/engagement/item-detail' element={<Product />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='book-an-appointment' element={<Book />}></Route>
        <Route path='contact-us' element={<Contact />}></Route>
      </Routes>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
