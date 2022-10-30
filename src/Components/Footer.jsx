import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ingressive from "../img/ingressive.png";
import zuri from "../img/zuri.png";
const Footer = () => {
  return (
    <Container>
      <div className="border mt-5"></div>
      <Row className="mt-3">
        <Col lg="" md="4">
          <img
            src={zuri}
            alt=""
            className="img-fluid"
            style={{ width: "190px" }}
          />
        </Col>
        <Col lg="4" md="4">
          <p className="text-muted ms-lg-5 mt-2">
            Hng Internship 9 Frontend Task
          </p>
        </Col>
        <Col lg="4" md="4">
          <img
            src={ingressive}
            alt=""
            className="img-fluid ms-lg-5"
            style={{ width: "140px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
