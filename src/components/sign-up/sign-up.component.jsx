import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { displayName, email, password1, password2 } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ email, displayName, password: password1 });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password1"
          value={password1}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="password2"
          value={password2}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="sumbit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => dispatch(signUpStart(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
