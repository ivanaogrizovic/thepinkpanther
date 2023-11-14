import React from 'react';

import Slideshow from '../components/slideshow/slideshow'
import ShopByCut from './../components/shop-by-cut/shop-by-cut';
import ShopByStyle from './../components/shop-by-style/shop-by-style';
import homeAmbassadorImg from '../assets/home-ambassador.webp'

function Home(props: any) {

  const amassadorTitle = "A love that will last a lifetime"
  const ambassadorText = "Only a real diamond holds true timeless beauty and value.  slip on one of our dazzling, high grade diamond rings, guaranteed natural and conflict-free, and let it speak louder than words."
  const ambassadorLink = "SHOP ENGAGEMENT RINGS"
  return (
    <div className='fade-in'>
      <Slideshow image={homeAmbassadorImg} title={amassadorTitle} text={ambassadorText} link={ambassadorLink} />
      <ShopByCut rings={props.productList} />
      <ShopByStyle rings={props.productList} />
    </div>
  );
}

export default Home;