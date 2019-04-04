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
      <div className={classes.header}></div>
      <div className={classes.mainPanel}>
        <Title />
        <Profile />
        <Experience />
      </div>
      <div className={classes.sidePanel}>
        <Contacts />
        <Education />
        <Skills />
      </div>
    </div>
  );
};

RenderPanel.propTypes = {
  classes: PropTypes.object,
};

export default connect(null)(RenderPanel);
