import React from "react";

// import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";

function CustomButton(props) {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
}

export default CustomButton;
