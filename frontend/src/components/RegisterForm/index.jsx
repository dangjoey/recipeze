import React, { useState } from "react";
import {
  useHistory
} from "react-router-dom";
import { notification } from 'antd';
import envelope from '../../assets/envelope.svg'
import lock from '../../assets/lock.svg'
import user from '../../assets/user.svg'

import "./style.scss";

const RegisterForm = (props) => {
  const [formInputs, setFormInputs] = useState({});
  const history = useHistory()

  const submitForm = async(e) => {
    e.preventDefault();
    console.log('form');
    console.log(formInputs);
    const email = formInputs.email;
    const name = formInputs.name;
    const password = formInputs.password;

    const data = {
      name: name,
      email: email,
      password: password
    };

    const docRef = props.db.collection("user").doc(email);

    docRef.get().then((doc) => {
      if (doc.exists) {
        notification.open({
          message: 'Error',
          description: 'Account already exists!'
        });
      } else {
        docRef.set(data);
        return history.push('/');
      }
    });
  }

  const onType = (e) => {
    e.preventDefault();
    const formInputsCopy = {...formInputs};
    formInputsCopy[e.target.name] = e.target.value;
    setFormInputs(formInputsCopy);
  }

  return (
    <form className="register-form">
      <div className="form">
        <input 
          className="name"
          name="name"
          onChange={onType}
          placeholder="Name"
          type="name" />
        <img alt="user" className="user" src={user}/>
      </div>
      <div className="form">
        <input 
          className="username"
          name="email"
          onChange={onType}
          placeholder="Email"
          type="email" />
        <img alt="email" className="email" src={envelope}/>
      </div>
      <div className="form">
        <input className="password" 
          name="password"
          onChange={onType}
          placeholder="Password"
          type="password" />
        <img alt="lock" className="lock" src={lock}/>
      </div>
      <button className="login" onClick={submitForm}>Sign Up</button>
    </form>
  );
};

export default RegisterForm;
