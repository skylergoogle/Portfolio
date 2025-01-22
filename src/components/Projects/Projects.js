import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import snake from "../../Assets/Projects/snake.png";
import simple from "../../Assets/Projects/simple.png";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              title="Snake Game"
              description="This code implements a simple Snake Game in Java using the Swing library. The game features a snake that moves in a 2D grid, growing in length as it eats randomly placed food. The Graphics class handles the game logic and rendering, while the Food class generates random food positions. The game ends when the snake collides with itself or the boundaries, and it can be restarted by pressing any key."
              ghLink="https://github.com/skylergoogle/Snake-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage."
              ghLink="https://github.com/skylergoogle/Simple-Member-Management-System-in-C-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained an image classifier model using 'PyTorch' framework with CNN and Transfer Learning. The model successfully detects diseased and healthy leaves of 14 unique plants, achieving an accuracy of 98% with ResNet34 pretrained model."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simple}
              title="Simple Member Management System"
              description="A Simple Member System in C# manages user registration, login, and profile data. It uses a controller to handle logic and interactions between the user interface and the data model. The system ensures secure authentication and basic CRUD operations.."
              ghLink="https://github.com/skylergoogle/Simple-Member-Management-System-in-C-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using the 'FER-2013 dataset' with Keras and TensorFlow backend. The classifier successfully predicts various human emotions with an accuracy of 60.1%. Then used OpenCV to detect faces in an image and pass the face to the classifier to predict the person's emotion."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

