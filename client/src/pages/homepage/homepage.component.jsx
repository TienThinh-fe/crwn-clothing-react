import React from "react";
import Directory from "../../components/directory/directory.component";
import { connect } from "react-redux";

import { HomePageContainer, Title } from "./homepage.styles.jsx";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Title>
        Welcome <br />{" "}
        {props.currentUser ? `${props.currentUser.displayName}!` : ""}
      </Title>
      <Directory />
    </HomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// connect function used to connect a component to Redux store
export default connect(mapStateToProps)(HomePage);
