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
import ComingSoon from './routes/coming-soon';
import './App.scss';

function App() {

  const productList = useContext(ProductsContext);
  return (
    <div className='pinkpanther-app fade-in'>
      <Header />
      <Navigation productList={productList.products} />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='shop/engagement' element={<Shop productList={productList.products} />}></Route>
          <Route path='shop/coming-soon' element={<ComingSoon />}></Route>
          <Route path='shop/engagement/item-detail' element={<Product />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='book-an-appointment' element={<Book />}></Route>
        </Routes>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}

export default App;
