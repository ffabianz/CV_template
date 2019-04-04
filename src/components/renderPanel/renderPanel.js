import React from "react";
import PropTypes from "prop-types";
import Title from "../title";
import Profile from "../profile";
import Experience from "../experience";
import Education from "../education";
import Skills from "../skills";
import Contacts from "../contacts";
import { connect } from "react-redux";

const RenderPanel = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Title />
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Contacts />
    </div>
  );
};

RenderPanel.propTypes = {
  classes: PropTypes.object,
};

export default connect(null)(RenderPanel);
