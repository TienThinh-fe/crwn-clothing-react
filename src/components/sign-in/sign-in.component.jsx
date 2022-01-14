import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

function SignIn(props) {
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = authInfo;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setAuthInfo({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAuthInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={authInfo.email || ""}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={authInfo.password || ""}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            GOOGLE SIGN IN
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
