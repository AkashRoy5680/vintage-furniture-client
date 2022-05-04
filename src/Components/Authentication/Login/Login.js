import axios from "axios";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location=useLocation();

  let from = location.state?.from?.pathname || "/";


  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const[token]=useToken(user);

  const navigateRegistration = () => {
    navigate("/register");
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    
    
    //navigate(from, { replace: true });
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent password to email");
    } else {
      alert(" !!! please provide your email-address");
    }
  };

  if (token) {
    navigate(from, { replace: true });
    console.log(user)
  }

  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">
        <h2>Login Page</h2>

        <Form.Group className="mb-3" controlid="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlid="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Login
        </Button>
        <p className="mt-2">
          Don't have an account?{" "}
          <Link
            className="text-decoration-none "
            to="/register"
            onClick={navigateRegistration}
          >
            create an account
          </Link>
        </p>

        <p>
          Forget Password?
          <button
            className="btn btn-link text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <SocialLogin></SocialLogin>
      </Form>
    </div>
  );
};

export default Login;
