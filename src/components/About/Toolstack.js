import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiWindows,
} from "react-icons/si";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Intersection Observer
import { useInView } from "react-intersection-observer";

// Animation variant for each icon
const iconVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

// Parent animation for staggered effect
const parentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};

function Toolstack() {
  // Intersection observer hook for triggering animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      variants={parentVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ width: "100%" }}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiWindows />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiVisualstudiocode />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiPostman />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiGithub />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiVercel />
          </motion.div>
        </Col>
        {/* <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiSlack />
          </motion.div>
        </Col> */}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
