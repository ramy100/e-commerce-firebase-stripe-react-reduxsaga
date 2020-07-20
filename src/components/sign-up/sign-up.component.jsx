import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
function SignUp({ signUpStart }) {
  const initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { displayName, email, password, confirmPassword } = formData;
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      await signUpStart({ email, password }, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <h1 className="title">
        <span>
          <form action="" className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              onChange={handleChange}
              value={displayName}
              label="Display Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
              label="Confirm Password"
              required
            />
            <CustomButton type="submit">Sign Up</CustomButton>
          </form>
        </span>
      </h1>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (emainAndPassword, additionalData) =>
    dispatch(signUpStart(emainAndPassword, additionalData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
