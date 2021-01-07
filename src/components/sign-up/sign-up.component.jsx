import React from "react";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password1: "",
      password2: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password1, password2 } = this.state;

    if (password1 !== password2) {
      alert("passwords don't match");
      return;
    }

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password1);
      const { user } = res;
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password1: "",
        password2: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password1, password2 } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password1"
            value={password1}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="password2"
            value={password2}
            onChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton type="sumbit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
