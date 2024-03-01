import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import charity from "../../Assets/Projects/charity.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import agzaga from "../../Assets/Projects/agzaga responsive preview.png";
import justworks from "../../Assets/Projects/just works.png";
import mapleHr from "../../Assets/Projects/mapleHR.png";
import kallidus from "../../Assets/Projects/kallidus.png";

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
              imgPath={agzaga}
              isBlog={false}
              title="Agzaga"
              description="Agzaga.com is an online farm store offering a comprehensive range of agricultural products, from farm supplies and livestock essentials to machinery parts and farm-themed toys. It stands out for its commitment to sustainable farming and global hunger solutions, backed by promotional deals to support its mission and engage customers."
              demoLink="https://agzaga.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={justworks}
              isBlog={false}
              title="Just Works"
              description="Justworks.com is a platform offering scalable HR solutions for small businesses, simplifying complex aspects such as payroll, benefits, compliance, and HR support. It aims to reduce administrative burdens, allowing businesses to focus on growth. This holistic approach makes Justworks an essential mention in a portfolio, showcasing how it streamlines operations for small businesses through modern, user-friendly software and dedicated human support."
              demoLink="https://justworks.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mapleHr}
              isBlog={false}
              title="MapleHR"
              description="MapleHR is designed as a comprehensive HR platform aimed at simplifying and automating a wide range of HR processes for businesses. It facilitates more efficient work environments by offering solutions for people management, claims management, expense management, and a ticket management system to handle queries effectively. The platform emphasizes reducing paperwork and streamlining operations through digital transformation, thereby enhancing overall productivity and management ease for HR departments."
              demoLink="https://mapleHr.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kallidus}
              isBlog={false}
              title="Kallidus"
              description="Kallidus.com offers a suite of HR and LMS solutions designed to enhance learning, development, and performance across organizations. Their platform supports the entire employee lifecycle, from recruitment to onboarding, learning, performance management, and compliance. Aimed at businesses of all sizes, Kallidus prioritizes creating an outstanding employee experience through user-friendly technology and scalable solutions, serving over 2 million users worldwide."
              demoLink="https://www.kallidus.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
