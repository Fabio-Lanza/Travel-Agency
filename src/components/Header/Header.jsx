import {useRef, useEffect} from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Button } from "reactstrap";
import logo from "../../assets/images/logo2.png";
import {BiMenu} from 'react-icons/bi'

function Header() {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickHeaderFunc = () => {
    window.addEventListener('scroll', ()=> {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=> {
stickHeaderFunc()
return window.removeEventListener('scroll', stickHeaderFunc)
  }, [])

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

const toggleMenu = () => {
  menuRef.current.classList.toggle('show_menu')
}

  return (
    <header className="header" ref={headerRef}>
      <Container className="container">
        <Row className="row">
          <div className="nav_wrapper ">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
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
              <div className="nav_btn d-flex align-items-center gap-4"></div>
              <button className="btn secondary__btn">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="btn primary__btn">
                <Link to={"/register"}>Register</Link>
              </button>
            </div>

            <span className="mobile_menu" onClick={toggleMenu}>
            <BiMenu/>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
