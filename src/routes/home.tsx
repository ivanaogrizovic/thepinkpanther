import React from 'react';

import SplitContent from '../components/split-content/split-content'
import ShopByCut from './../components/shop-by-cut/shop-by-cut';
import ShopByOccasion from '../components/shop-by-style/shop-by-occasion';
import homeAmbassadorImg from '../assets/home-ambassador.webp'

function Home() {

const amassadorTitle = "A love that will last a lifetime";  
const ambassadorText = "Only a real diamond holds true timeless beauty and value. Slip on one of our dazzling, high grade diamond rings, guaranteed natural and conflict-free, and let it speak louder than words."
  const ambassadorLink = "SHOP ENGAGEMENT RINGS";
  return (
    <div className='fade-in'>
      <SplitContent image={homeAmbassadorImg} title={amassadorTitle} text={ambassadorText} link={ambassadorLink} />
      <ShopByCut />
      <ShopByOccasion />
    </div>
  );
}

export default Home;
