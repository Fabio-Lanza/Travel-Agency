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
              <h2>Sign up with your email address to stay in-the-know with travel recs & travel advisor news.</h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>
              <p>
              Plus, receive travel inspiration, news and latest promotions.
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
