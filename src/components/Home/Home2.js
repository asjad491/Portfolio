import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Import Framer Motion for animations
import { motion } from "framer-motion";
// Import Intersection Observer for scroll animations
import { useInView } from "react-intersection-observer";

function Home2() {
  // Intersection Observer for detecting when elements are in view
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: socialRef, inView: socialInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            {/* Slide-in animation for the "LET ME INTRODUCE MYSELF" title */}
            <motion.h1
              style={{ fontSize: "2.6em" }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: titleInView ? 0 : -100, opacity: titleInView ? 1 : 0 }}
              transition={{ duration: 1 }}
              ref={titleRef}
            >
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </motion.h1>

            {/* Slide-in animation for the description */}
            <motion.p
              className="home-about-body"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: textInView ? 0 : -100, opacity: textInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              ref={textRef}
            >
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and its related Frameworks </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>in areas related to{" "}
                <b className="purple"> Web Dev.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Angular.js and Next.js</b>
              </i>
            </motion.p>
          </Col>

          <Col md={4} className="myAvtar">
            {/* Tilt effect for the image */}
            <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} glareEnable={false}>
              <motion.img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </Tilt>
          </Col>
        </Row>

        {/* Social Icons Section */}
        <Row>
          <Col md={12} className="home-about-social">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: socialInView ? 0 : 50, opacity: socialInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              ref={socialRef}
            >
              FIND ME ON
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: socialInView ? 0 : 50, opacity: socialInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 1 }}
              ref={socialRef}
            >
              Feel free to <span className="purple">connect </span>with me
            </motion.p>

            {/* Social Icons */}
            <ul className="home-about-social-links">
              {/* GitHub Icon */}
              <motion.li
                className="social-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: socialInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <a
                  href="https://github.com/asjad491"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </motion.li>

              {/* LinkedIn Icon */}
              <motion.li
                className="social-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: socialInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <a
                  href="https://www.linkedin.com/in/asjad-afzaal-165391251/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </motion.li>

              {/* Instagram Icon */}
              <motion.li
                className="social-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: socialInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
              >
                <a
                  href="https://www.instagram.com/asjad491/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </motion.li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
