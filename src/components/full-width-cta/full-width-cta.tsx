import { Link } from "react-router";
import { motion, Variants } from "framer-motion";
import "./full-width-cta.scss";

interface FullWidthCtaProps {
  title: string;
  text: string;
  linkText?: string;
  link?: string;
  theme?: string;
}

const item: Variants = {
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

export default function FullWdithCta({
  title,
  text,
  linkText,
  link,
  theme,
}: FullWidthCtaProps) {
  return (
    <motion.div
      className={`pinkpanther-full-width-cta -${theme}`}
      data-testid="full-width-cta"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2 className="pinkpanther-full-width-cta-title" variants={item}>
        {title}
      </motion.h2>

      <motion.p className="pinkpanther-full-width-cta-text" variants={item}>
        {text}
      </motion.p>

      {link && linkText && (
        <motion.p variants={item}>
          <Link
            to={link}
            rel="noopener noreferrer"
            className="pinkpanther-cta-link"
          >
            {linkText} →
          </Link>
        </motion.p>
      )}
    </motion.div>
  );
}
