import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Asjad Afzaal </span>
              from <span className="purple"> Lahore, Pakistan</span>
              <br />
              I am a Software Developer having expertise in web development and web app development.
              I have a strong grasp on MERN Stack.
              <br />
              I am currently studying Computer Science at NCBA&E Lahore.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Watching Anime
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default AboutCard;
