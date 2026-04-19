import { useRef } from "react";
import ShopByCut from "./../components/shop-by-cut/shop-by-cut";
import FullWdithCta from "../components/full-width-cta/full-width-cta";
import Hero from "../components/hero/hero";
import SplitContent from "../components/split-content/split-content";
import customiseRing from "../assets/ring-design.webp";

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Hero mainRef={mainContentRef} />
      <SplitContent
        title="Customise your dream ring"
        text="Create a ring that is entirely your own. From selecting the perfect diamond to refining every detail of the setting, our bespoke service allows you to shape a piece that reflects your story with precision and elegance."
        link="This is a link"
        image={customiseRing}
        theme="primary"
      />
      <ShopByCut mainRef={mainContentRef} />
      <FullWdithCta
        title="Our committment to a brither future"
        text="By supporting global projects that provide real solutions to climate change, we’re giving our customers the opportunity to shop consciously. Choosing from sustainable lab-grown diamonds or ethical, conflict-free, naturally mined diamonds, without the environmental toll of traditional emissions. Every natural diamond purchased in 2025 directly contributes to protecting trees in the Brazilian rainforest. These initiatives not only help safeguard our planet but also empower the local communities where they take root, creating a legacy of sustainability, responsibility, and shared prosperity."
        linkText="Learn more"
        link="/about"
      />
    </>
  );
}
