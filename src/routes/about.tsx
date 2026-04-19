import AboutSection from "../components/about-section/about-section";
import Quote from "../components/quote/quote";
import FullWdithCta from "../components/full-width-cta/full-width-cta";
import SplitContent from "../components/split-content/split-content";
import ringsImage from "../assets/gold-rings.webp";
import Header from "../components/header/header";

const aboutInfo: { title: string; paragraph: string }[] = [
  {
    title: "React-based",
    paragraph:
      "Built with React 18.3.1, this website showcases a modular structure with reusable, scalable components.",
  },
  {
    title: "Responsive",
    paragraph:
      "Designed to adapt seamlessly, the layout performs beautifully across phones, tablets, and desktops.",
  },
  {
    title: "Mobile-first",
    paragraph:
      "Over 70% of the internets traffic comes from mobile devices. Catering towards the majority of users is vital.",
  },
  {
    title: "WCAG 2.2 AA",
    paragraph:
      "Fully accessible, allowing everyone to navigate your services. Real or not.",
  },
];

const founderQuote: string =
  "Every glittering image on this site is a glamorous freeloader from the internet. Just some celebrities I temporarily convinced to appear in my front-end showcase. No ownership, no profit, no paparazzi rights claimed. No diamonds were purchased, sold, or harmed in the process — they’re basically on an unpaid modeling gig.";
export default function About() {
  return (
    <div className="-fade-in">
      <Header text="where jewellery meets development" title="About us" />

      <FullWdithCta
        title="Tech Stack"
        text="This project was build with React, Typescript, and Sass. It leverages a mobile-first design and fully accessible pages."
        theme="tertiary"
        linkText="Find out more on GitHub"
        link="https://github.com/ivanaogrizovic/thepinkpanther"
      />
      <AboutSection info={aboutInfo} theme="tertiary" />
      <SplitContent
        image={ringsImage}
        title="Our diamond story"
        text="The Pink Panther is a fictional fine-jewellery brand developed as a portfolio piece to showcase front-end development skills. It uses the language of luxury and playful elegance as a backdrop for exploring modern web technologies, refined UI design, and responsive e-commerce patterns in a more engaging, less conventional format. It brings together clean, maintainable code, reusable components, and accessibility-focused decisions, resulting in a build that feels cohesive, intentional, and just expressive enough to stand out without losing clarity.."
        link="Shop out products"
      />
      <Quote quote={founderQuote} author="Jane Doe, CEO & Co-Founder" />
    </div>
  );
}
