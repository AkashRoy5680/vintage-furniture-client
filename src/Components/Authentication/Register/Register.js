import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import auth from "../../Firebase/Firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "../../hooks/useToken";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const[errormessage,setError]=useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const[token]=useToken(user);

  const handleNameOnBlur = (event) => {
    setName(event.target.value);
  };

  const handleEmailOnBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordOnBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordOnBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password!==confirmPassword){
      setError("Your password did not match")
      return;
  }
  if(password.length<6){
      setError("password must be 6 characters or longer")
      return;
  }
  else{
    navigate("/verify");
    await createUserWithEmailAndPassword(email, password);
  }
   
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate("/home");
    console.log(user);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">
        <h2>Registration Page</h2>
        <Form.Group className="mb-3" controlid="formBasicPassword">
          <Form.Control
            onBlur={handleNameOnBlur}
            name="name"
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="formBasicEmail">
          <Form.Control
            onBlur={handleEmailOnBlur}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordOnBlur}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="formBasicPassword" required>
          <Form.Control
            onBlur={handleConfirmPasswordOnBlur}
            name="confirmPassword"
            type="Password"
            placeholder="confirm Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="formBasicCheckbox">
          <input
            onClick={() => {
              setAgree(!agree);
            }}
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label
            className={`ps-2 ${agree ? "text-success" : "text-danger"}`}
            htmlFor="terms"
          >
            Accept furniture shop terms and conditions
          </label>
        </Form.Group>
        <p style={{color:"red"}}>{errormessage}</p>
        <Button disabled ={!agree} variant="success" type="submit">
          Register
        </Button>
        <p>
          Already have an account?
          <Link
            className="text-decoration-none"
            to="/login"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Register;
