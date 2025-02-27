import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// Import Framer Motion for animations
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* Slide-in animation for the "Hi There!" text */}
              <motion.h1
                style={{ paddingBottom: 15 }}
                className="heading"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              {/* Slide-in animation for "ASJAD AFZAAL" */}
              <motion.h1
                className="heading-name"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                I'M
                <strong className="main-name"> ASJAD AFZAAL</strong>
              </motion.h1>

              {/* Slide-up animation for the Type component */}
              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Type />
              </motion.div>

              {/* Fade-in animation for the thinner programming quote */}
              <motion.blockquote
                style={{
                  fontSize: "16px", // Smaller font size
                  fontWeight: "300", // Thinner font weight
                  fontStyle: "italic",
                  marginTop: "10px",
                  color: "#fff",
                  textAlign: "center",
                  maxWidth: "500px",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                "The best way to predict the future is to invent it."
              </motion.blockquote>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* Floating up and down animation for the image */}
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                animate={{
                  y: ["0px", "-20px", "0px"], // Float up and down
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity, // Repeat the animation indefinitely
                  ease: "easeInOut",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
