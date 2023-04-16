import {useState} from 'react'
import './Login.css'
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from 'react-router-dom'
import loginImg from '../../assets/images/login.png'
import userIcon from '../../assets/images/user.png'

function Login() {

  const [credentials, setCredentials] = useState({
    email:undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
          <div className="login_container d-flex justify-content-between">
            <div className="login_img">
              <img src={loginImg} alt="" />
            </div>

            <div className="login_form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>

              <Form>
                <FormGroup>
                  <input 
                  type="text" 
                  placeholder='Email' 
                  id='email' 
                  required
                  onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                  <input 
                  type="password" 
                  placeholder='Password' 
                  id='password' 
                  required
                  onChange={handleChange}/>
                </FormGroup>
                <button className='btn secondary__btn auth_btn' type='submit'>
                  Login
                  </button>
              </Form>
              <p>Don't have an account?<Link to='/register'>Create</Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login