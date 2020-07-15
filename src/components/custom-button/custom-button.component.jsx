import React from "react";
import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";
function CustomButton({ children, ...otherProps }) {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
}

export default CustomButton;
