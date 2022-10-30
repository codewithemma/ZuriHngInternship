import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ugo from "../img/ugo.jpg";
import "../App.css";
const MainSection = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" className="mx-auto">
          <div className="avatar my-4 margin-left">
            <img
              src={ugo}
              alt=""
              className="img-fluid ms-5"
              style={{
                width: "60px",
                borderRadius: "50%",
                height: "65px",
                margin: "auto",
                id: "profile_img",
              }}
            />
            <h4 style={{ color: "#101828" }}>codewithemma</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="mx-auto">
          <div className="d-grid gap-3">
            <Button
              variant="secondary"
              size="lg"
              href="https://www.twitter.com/codewithemma"
              target="_blank"
              id="twitter"
            >
              Twitter Link
            </Button>
            <Button
              variant="secondary"
              id="btn_zuri"
              size="lg"
              href="https://books.zuri.team"
              target="_blank"
            >
              Zuri Team
            </Button>
            <Button
              variant="secondary"
              id="books"
              size="lg"
              href="https://books.zuri.team/python-for-beginners?ref_id=codewithemma"
              target="_blank"
            >
              Zuri Books
            </Button>
            <Button
              variant="secondary"
              id="python_books"
              size="lg"
              href="https://books.zuri.team"
              target="_blank"
            >
              Python Books
            </Button>
            <Button
              variant="secondary"
              id="pitch"
              size="lg"
              href="https://background.zuri.team"
              target="_blank"
            >
              Background Check for Coders
            </Button>
            <Button
              variant="secondary"
              id="book_design"
              size="lg"
              href="https://books.zuri.team/design-rules"
              target="_blank"
            >
              Design Book
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
