import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  EmailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";
function SignIn({ googleSignInStart, emailSignInStart }) {
  const initialFormData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      emailSignInStart({ email, password });
      setFormData(initialFormData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          handleChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign in{" "}
          </CustomButton>
          <CustomButton
            isGoogleSignIn
            type="button"
            onClick={googleSignInStart}
          >
            {" "}
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(EmailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
