import React from 'react';
import {
  Link
} from "react-router-dom";
import FacebookLogin from '../FacebookLogin'
import LoginForm from '../LoginForm'
import './style.scss';

const LandingPage = (props) => {
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div className="landing">
      <h1><span className="underline">me</span>al.ly</h1>
      <h2 className="description">list your ingredients and we’ll make it easy!</h2>
      <LoginForm db={props.db}/>
      <div className="new-account">
        <h3>Don’t have an account?</h3>
        <Link to="/register">
        <h3 className="sign-up">Sign Up</h3>
        </Link>
      </div>
      <span id="login-divider">or</span>
      <FacebookLogin 
      responseFacebook={responseFacebook}
      onClick={() => {
        console.log('hi world')
      }}/>
    </div>
  )
}

export default LandingPage;
