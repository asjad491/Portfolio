import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

// Import Framer Motion for animations
import { motion } from "framer-motion";

// Import Intersection Observer
import { useInView } from "react-intersection-observer";

function About() {
  // Intersection observer hook for the "Know Who I'M" section
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  // Intersection observer hook for the "AboutCard" section
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  // Intersection observer hook for the image
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* Slide-in animation for the "Know Who I'M" title */}
            <motion.h1
              ref={titleRef}
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: titleInView ? 0 : -100, opacity: titleInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Know Who <strong className="purple">I'M</strong>
            </motion.h1>

            {/* Aboutcard component */}
            <motion.div
              ref={cardRef}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: cardInView ? 0 : 100, opacity: cardInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Aboutcard />
            </motion.div>
          </Col>

          {/* Image Section with Animation */}
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <motion.img
              ref={imageRef}
              src={laptopImg}
              alt="about"
              className="img-fluid"
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: imageInView ? 0 : 100,
                opacity: imageInView ? 1 : 0,
              }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
