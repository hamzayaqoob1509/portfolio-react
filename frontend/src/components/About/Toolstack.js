import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiClickup,
  SiBasecamp,
} from "react-icons/si";

import {
  CgMonday,
} from "react-icons/cg"

import { FaTrello } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgMonday />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBasecamp />
      </Col>
    </Row>
  );
}

export default Toolstack;
