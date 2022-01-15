import React from "react";
import Directory from "../../components/directory/directory.component";
import { connect } from "react-redux";

import { HomePageContainer } from "./homepage.styles.jsx";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <h1
        className="title"
        style={{ textAlign: "left", marginBottom: "40px", width: "100%" }}
      >
        {props.currentUser ? `Welcome ${props.currentUser.displayName}!` : ""}
      </h1>
      <Directory />
    </HomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// connect function used to connect a component to Redux store
export default connect(mapStateToProps)(HomePage);
