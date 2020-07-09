import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
function SignIn() {
  const initialFormData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await auth.signInWithEmailAndPassword(email, password);
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
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            {" "}
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
