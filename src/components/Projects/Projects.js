import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      imgPath: chatify,
      title: "Expense Tracker",
      description: "An Expence management App build with React.js that keeps record of your monthly expences. saves the expences in a list where you can edit or delete expences. and can save the record in a txt file. You can also Import the saved record in the App as a txt file to check your records",
      ghLink: "https://github.com/asjad491/expence-tracker",
      demoLink: "https://react-expence-tracker.vercel.app/",
    },
    {
      imgPath: bitsOfCode,
      title: "Movie Maze",
      description: "A movie search app build with React.js that fetches data from 'TMDB' API. The app shows the list of movies and tv shows with their details. The app also has a search bar to search for movies and tv shows. The app also has a filter feature to search for a specific ganre or release date.",
      ghLink: "https://github.com/asjad491/Movies-search-application",
      demoLink: "https://movie-maze-dun.vercel.app/",
    },
    {
      imgPath: editor,
      title: "Inotes",
      description: "A Full Stack MERN project where you can create, edit, delete notes. The app has a user authentication system where you can register, login and logout. Saving the user information in MongoDB.The app also has a feature to search for notes as well as view or  setting up a profile picture.",
      ghLink: "https://github.com/asjad491/inotes",
      demoLink: "https://inotes-lake.vercel.app/",
    },
    // Add other projects here
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                index={index} // Pass the index to create a delay effect
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
