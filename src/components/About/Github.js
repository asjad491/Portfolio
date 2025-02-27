import React from "react";
import { Row } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useInView } from "react-intersection-observer"; // Import Intersection Observer

// Animation variant for pop effect
const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 }, // Start with small size and transparent
  visible: { 
    opacity: 1, 
    scale: 1, // End with full size and opacity
    transition: { duration: 0.5 } // Duration of the pop effect
  },
};

function Github() {
  // Experience Section
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Education Section
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      {/* Experience Section */}
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          MY <strong className="purple">Experience</strong>
        </h1>

        <div className="experience-container">
          <div className="experience-wrapper">
            {/* Vertical Timeline Line */}
            <div className="timeline">
              <div className="timeline-dot"></div>
            </div>

            {/* Experience Card 1 */}
            <motion.div
              ref={experienceRef}
              variants={cardVariant}
              initial="hidden"
              animate={experienceInView ? "visible" : "hidden"}
              style={{ width: "100%" }}
            >
              <div className="experience-card">
                <h3 className="job-title purple">
                  <strong>Freelance Software Engineer</strong>
                </h3>
                <p className="company">Bricks Project - Property Management System</p>
                <p className="dates">Dec 6, 2024 – Feb 2, 2025 (Completed)</p>
                <ul className="description">
                  <li>Worked on **Bricks** Project, a property management system.</li>
                  <li>Designed and implemented a **modern, responsive UI** using **Tailwind CSS** & **custom CSS**.</li>
                  <li>Optimized AngularJS frontend components for **smooth interactivity and performance**.</li>
                  <li>Ensured **cross-browser compatibility** and a seamless user experience.</li>
                  <li>Improved understanding of **Tailwind CSS utility classes** for faster and more efficient UI development.</li>
                  <li>Debugged complex **CSS responsiveness issues** across various screen sizes and devices.</li>
                  <li>Gained hands-on experience in **refactoring AngularJS components** to enhance reusability and maintainability.</li>
                  <li>Implemented **custom animations and transitions** for a smoother user experience.</li>
                  <li>Developed problem-solving skills by troubleshooting **AngularJS directive conflicts** in the UI.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Row>

      <br />
      <br />
      <br />
      {/* Education Section */}
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          MY <strong className="purple">Education</strong>
        </h1>

        <div className="education-container">
          <div className="experience-wrapper">
            {/* Vertical Timeline Line */}
            <div className="timeline">
              <div className="timeline-dot"></div>
            </div>

            {/* Education Card 1 */}
            <motion.div
              ref={educationRef}
              variants={cardVariant}
              initial="hidden"
              animate={educationInView ? "visible" : "hidden"}
              style={{ width: "100%" }}
            >
              <div className="experience-card">
                <h3 className="job-title">
                  <strong className="purple">Bachelors in Computer Science</strong>
                </h3>
                <p className="company">NCBA&E, Lahore</p>
                <p className="dates">2022 – 2026 (Ongoing)</p>
                <ul className="description">
                  <li>Pursuing a Bachelor's degree in Computer Science.</li>
                  <li>Learning advanced concepts in software development, algorithms, and data structures.</li>
                  <li>Building hands-on experience through various programming projects.</li>
                </ul>
              </div>
            </motion.div>

            {/* Education Card 2 */}
            <motion.div
              ref={educationRef}
              variants={cardVariant}
              initial="hidden"
              animate={educationInView ? "visible" : "hidden"}
              style={{ width: "100%" }}
            >
              <div className="experience-card">
                <h3 className="job-title">
                  <strong className="purple">Intermediate in Computer Science</strong>
                </h3>
                <p className="company">LGS Group of Colleges, Lahore</p>
                <p className="dates">2020 – 2022 (Completed)</p>
                <ul className="description">
                  <li>Completed intermediate studies in Computer Science.</li>
                  <li>Gained foundational knowledge in programming and computer science concepts.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Github;
