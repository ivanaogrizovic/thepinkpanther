import AboutSection from "../components/about-section/about-section";
import Quote from "../components/quote/quote";
import FullWdithCta from "../components/full-width-cta/full-width-cta";

const founderQuote: string =
  "Every glittering image on this site is a glamorous freeloader from the internet. Just some celebrities I temporarily convinced to appear in my front-end showcase. No ownership, no profit, no paparazzi rights claimed. No diamonds were purchased, sold, or harmed in the process — they’re basically on an unpaid modeling gig.";
export default function About() {
  return (
    <div className="-fade-in">
      <FullWdithCta
        title="Our diamond story"
        text="The Pink Panther is a fictional fine-jewellery brand created as a showcase project to demonstrate the author’s front-end development skills. Inspired by timeless elegance and playful luxury, the brand serves as a creative canvas for experimenting with modern web technologies, polished UI design, and responsive e-commerce experiences."
        linkText="Explore diamonds"
        link="/shop/engagement"
      />
      <AboutSection />
      <Quote quote={founderQuote} author="Jane Doe, CEO & Co-Founder" />
    </div>
  );
}
