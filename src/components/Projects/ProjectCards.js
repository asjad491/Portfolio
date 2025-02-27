import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useInView } from "react-intersection-observer"; // Import Intersection Observer

function ProjectCards(props) {
  // Add inView hook to trigger animation when the card is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Card triggers when 20% of it is in the viewport
  });

  // Pop animation variant
  const cardVariant = {
    hidden: { opacity: 0, x: 200 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        delay: props.index * 0.2, // Delay the animation based on the index (sequential)
      }, // Pop effect
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ width: "100%" }}
    >
      <Card className="project-card-view">
        <Card.Img className="imgn" variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <div>
            <div class="purple project-title">

              <Card.Title>{props.title}</Card.Title>
            </div>
            <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
          </div>
          <div style={styles.buttonContainer}>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

const styles = {
  buttonContainer: {
    // marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    gap: "10px",
  },
};

export default ProjectCards;
