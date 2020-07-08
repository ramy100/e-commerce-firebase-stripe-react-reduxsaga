import React, { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";
function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ email: "", password: "" });
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
        <CustomButton type="submit" value="Submit Form">
          Sign in{" "}
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
