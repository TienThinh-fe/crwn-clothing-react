import React from "react";
import Directory from "../../components/directory/directory.component";
import { connect } from "react-redux";

import "./homepage.styles.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <h1
        className="title"
        style={{ textAlign: "left", marginBottom: "40px", width: "100%" }}
      >
        {props.currentUser ? `Welcome ${props.currentUser.displayName}!` : ""}
      </h1>
      <Directory />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// connect function used to connect a component to Redux store
export default connect(mapStateToProps)(HomePage);
