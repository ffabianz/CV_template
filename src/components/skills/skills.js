import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const skillsRows = skills => {
  return skills.map((skill, key) => {
    return (
      <div key={skill.key}>
        <Typography>{skill.name}</Typography>
        <Typography>{skill.percentage}</Typography>
      </div>
    );
  });
};

const skills = ({ classes, skills, skillsTitle }) => {
  return (
    <div className={classes.root}>
      {skillsTitle}
      {skillsRows(skills)}
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    skills: state.skills,
    skillsTitle: state.skillsTitle
  };
};

skills.propTypes = {
  classes: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  skillsTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(skills);
