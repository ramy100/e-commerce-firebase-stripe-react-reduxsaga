import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-sign-up.styles.scss";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
function SignInSignUp({ history: { action } }) {
  useEffect(() => {
    if (action === "REPLACE") {
      swal("You need to login first!", "", "info");
    }
  }, [action]);
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default withRouter(SignInSignUp);
