import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiVite,
  SiExpress,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Intersection Observer
import { useInView } from "react-intersection-observer";

function Techstack() {
  // Intersection observer hook for triggering animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

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

  return (
    <motion.div
      ref={ref} // Attach observer to this row
      variants={parentVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiHtml5 />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiCss3 />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiJavascript1 />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiNodejs />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiExpress />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiReact />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiAngularSimple />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiMongodb />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiNextdotjs />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <DiGit />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiTailwindcss />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiVite />
          </motion.div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <motion.div variants={iconVariant}>
            <SiMysql />
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
}

export default Techstack;
