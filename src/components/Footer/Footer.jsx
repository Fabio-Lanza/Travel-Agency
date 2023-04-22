import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  const quick_links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];

  const quick_links2 = [
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />

              <div className="social_links">
                <span>
                  <Link to="#">
                    <FaGithub />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3" className="discover">
            <h5 className="footer_link-title">Discover</h5>
            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" className="quick-container">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" className="contact">
            <h5 className="footer_link-title">Contact</h5>
            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <MdLocationOn />
                  </span>
                  Address:
                </h6>
                <p className="mb-0 ">Millbrae, California</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <HiOutlineMail />
                  </span>
                  Email:
                </h6>
                <p className="mb-0 ">fabio.lanza4@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <AiTwotonePhone />
                  </span>
                  Phone:
                </h6>
                <p className="mb-0 ">(415)933-9439</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          {/* <Col lg='12' className="copyright">
                  <p>Copyright{year}, Develop by <span>Fabio Lanza</span></p>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
