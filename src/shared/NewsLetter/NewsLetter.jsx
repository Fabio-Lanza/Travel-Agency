import React from "react";
import "./NewsLetter.css";
import { Container, Row, Col } from "reactstrap";
import saveInfo from "../../assets/images/saveInfo.png";

function NewsLetter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe to get traveling information</h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, suscipit.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <img src={saveInfo} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsLetter;
