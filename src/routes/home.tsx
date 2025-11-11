import React from 'react';
import SplitContent from '../components/split-content/split-content'
import ShopByCut from './../components/shop-by-cut/shop-by-cut';
import ShopByOccasion from '../components/shop-by-style/shop-by-occasion';
import homeAmbassadorImg from '../assets/home-ambassador.webp'
import FullWdithCta from '../components/full-width-cta/full-width-cta';

import rainForest from '../assets/rainforest.webp';

function Home() {

const amassadorTitle = "A love that will last a lifetime";  
const ambassadorText = "Only a real diamond holds true timeless beauty and value. Slip on one of our dazzling, high grade diamond rings, guaranteed natural and conflict-free, and let it speak louder than words."
  const ambassadorLink = "SHOP ENGAGEMENT RINGS";
  return (
    <div className='-fade-in'>
      <SplitContent image={homeAmbassadorImg} title={amassadorTitle} text={ambassadorText} link={ambassadorLink} />
      <ShopByCut />
      <ShopByOccasion />
      <FullWdithCta 
        image = {rainForest}
        title = "Our committment to a brither future"
        text= "By supporting global projects that provide real solutions to climate change, we’re giving our customers the opportunity to shop consciously. Choosing from sustainable lab-grown diamonds or ethical, conflict-free, naturally mined diamonds, without the environmental toll of traditional emissions. Every natural diamond purchased in 2025 directly contributes to protecting trees in the Brazilian rainforest. These initiatives not only help safeguard our planet but also empower the local communities where they take root, creating a legacy of sustainability, responsibility, and shared prosperity."
        buttonText = "Learn more"
        link = "/book-an-appointment"
      />
    </div>
  );
}

export default Home;
