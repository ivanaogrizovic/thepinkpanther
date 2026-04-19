import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.config";
import { motion, Variants } from "framer-motion";
import "./split-content.scss";

interface SplitContentProps {
  title: string;
  text: string;
  link?: string;
  image: string;
  theme?: string;
  mainRef?: React.RefObject<HTMLDivElement | null>;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function SplitContent({
  title,
  text,
  link,
  image,
  theme,
  mainRef,
}: SplitContentProps) {
  return (
    <motion.div
      className={`-${theme}`}
      data-testid="split-content"
      ref={mainRef}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="pinkpanther-split-content">
        <div className="pinkpanther-split-content-text">
          <motion.h2 variants={fadeUp}>{title}</motion.h2>

          <motion.p variants={fadeUp}>{text}</motion.p>

          {link && (
            <motion.p variants={fadeUp}>
              <Link
                to={ROUTES.SHOP.ENGAGEMENT}
                className="pinkpanther-cta-link"
              >
                {link} →
              </Link>
            </motion.p>
          )}
        </div>

        <motion.img
          src={image}
          className="pinkpanther-split-content-image"
          alt=""
          variants={fadeUp}
        />
      </div>
    </motion.div>
  );
}
