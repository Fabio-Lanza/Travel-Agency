import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";
import logo from "../../assets/images/logo2.png";
import {BiMenu} from 'react-icons/bi'

function Header() {
  const nav_links = [
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

  return (
    <header className="header">
      <Container className="container">
        <Row className="row">
          <div className="nav_wrapper ">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path}
                     className={navClass => navClass.isActive ? 'active_link' : ''}
                     >{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4"></div>
              <button className="btn secondary__btn">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="btn primary__btn">
                <Link to={"/register"}>Register</Link>
              </button>
            </div>

            <span className="mobile_menu">
            <BiMenu/>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
