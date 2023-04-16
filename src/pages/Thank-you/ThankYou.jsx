import React from "react";
import "./ThankYou.css";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section className="thank_you-container">
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank_you">
              <span>
                <BiCheckCircle />
              </span>
              <h1 className="mb-3 fw-semibold">Thank you</h1>
              <h3 className="mb-4">Your tour is booked.</h3>
              <button className="btn primary__btn w-25"><Link to='/'>Back to Home</Link></button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThankYou;
