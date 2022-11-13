import { Button } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { Container, Form } from "react-bootstrap";
import "./loginForm.css";
import { LoginContext } from "../../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { loginState, token, handleLogin } = useContext(LoginContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ errorLogin, setErrorLogin ] = useState({
    state: false,
    message: ""
  })

  const loginUser = async (credentials) => {
    const response = await fetch("https://myfarm.masool.net/eman-clinick/public/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    
    const data = await response.json();
    if(data.result){
      setErrorLogin({state: false, message: ""})
      const responstState = data.result
      const userToken = data.success.token
      handleLogin(responstState, userToken)
      navigate('/profile')
    }else{
      setErrorLogin({state: true, message: data.error_message})
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
  };

  return (
    <div className="contact">
      <Container>
        <div className="item py-5">
          <div className="form row border m-2 pl-5 rounded justify-content-between">
            <div className="col-md-7 d-flex align-items-center">
              <Form className="p-4 w-100" onSubmit={handleSubmit}>
                {errorLogin.state && <div className="alert alert-danger">{errorLogin.message}</div>}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button type="submit" className="mybtn">
                  Submit
                </Button>
              </Form>

            </div>
            <div className="side col-md-4 p-5">
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;
