import { motion, Variants } from "framer-motion";
import ambassador from "../../assets/hero-ambassador.webp";
import Button from "../button/button";
import "./hero.scss";

interface HeroProps {
  mainRef: React.RefObject<HTMLDivElement | null>;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.35, 0.1, 0.25, 1],
    },
  },
};

export default function Hero({ mainRef }: HeroProps) {
  return (
    <div className="pinkpanther-hero" data-testid="hero-section">
      <img className="pinkpanther-hero-image" src={ambassador} alt="" />

      <motion.div
        className="pinkpanther-hero-text-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="pinkpanther-hero-title" variants={fadeUp}>
          Forever Starts Here
        </motion.h1>

        <motion.p variants={fadeUp}>
          Beautifully crafted jewellery designed to capture your soul.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            onClick={() =>
              mainRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discover Our Diamonds
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
