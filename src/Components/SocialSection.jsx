import React from "react";
import slack from "../img/slack.png";
import gitHub from "../img/github.png";
import { Container, Row, Col } from "react-bootstrap";
const SocialSection = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" className="mx-auto me-5 mt-4 ">
          <div className="margin-left-icon">
            {" "}
            <img
              src={slack}
              alt="slack"
              style={{ width: "30px" }}
              className="me-3 "
            />
            <img src={gitHub} alt="github" style={{ width: "30px" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialSection;
