import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import diamondExpert from "../../assets/diamond-expert.jpg";
import chooseGem from "../../assets/choose-gem.webp";
import chooseMetal from "../../assets/choose-metal.webp";
import findFit from "../../assets/findFit.webp";
import personalDetails from "../../assets/customise.webp";
import "./booking-process.scss";

export default function BookingProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const images = [chooseGem, chooseMetal, findFit, personalDetails];

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const processSteps = [
    {
      title: "1. Choose the Gem",
      text: "Begin with the centrepiece: the stone. Explore different cuts, colours, and carats to find the right balance between beauty, quality, and budget.",
    },
    {
      title: "2. Choose the Metal",
      text: "The band sets the tone. Platinum offers strength, while yellow, white, and rose gold each bring a distinct character to your chosen design.",
    },
    {
      title: "3. Find the Right Fit",
      text: "Comfort matters as much as style. We’ll help you measure the perfect size and choose proportions that look and feel right.",
    },
    {
      title: "4. Add Personal Details",
      text: "Finish with meaning. From an engraved message to a halo, details make the ring truly yours.",
    },
  ];

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="pinkpanther-booking-process-wrapper">
      <div className="pinkpanther-booking-process">
        <h3>How we help you find the perfect ring</h3>
        <p>
          We know this moment can be stressful. Our experts will guide you
          through each step with clarity and care, so your ring feels as
          meaningful as the moment it represents.
        </p>
        <div className="pinkpanther-booking-process-content">
          <motion.img
            key={activeStep ?? "default"}
            src={activeStep !== null ? images[activeStep] : diamondExpert}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ objectFit: "cover" }}
          />
          <ul className="pinkpanther-booking-process-list">
            {processSteps.map((item, index) => (
              <motion.li
                key={index}
                className="pinkpanther-booking-process-card"
                onMouseEnter={() => setActiveStep(index)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeVariants}
                transition={{ duration: 0.5 }}
                aria-label={`Step ${index + 1}: ${item.title}`}
              >
                <p className="-microcopy -bold">{item.title}</p>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
