import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const Contacts = ({
  classes,
  residence,
  number,
  mail,
  linkedin,
  github,
  contactTitle
}) => {
  return (
    <div className={classes.root}>
      <Typography>{contactTitle}</Typography>
      <Typography>{residence}</Typography>
      <Typography>{number}</Typography>
      <Typography>{mail}</Typography>
      <Typography>{linkedin}</Typography>
      <Typography>{github}</Typography>
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    mail: state.mail,
    linkedinUrl: state.linkedinUrl,
    linkedin: state.linkedin,
    github: state.github,
    githubUrl: state.githubUrl,
    residence: state.residence,
    number: state.number,
    contactTitle: state.contactTitle
  };
};

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
  residence: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  contactTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(Contacts);
