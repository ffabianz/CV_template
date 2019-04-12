import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LinearProgress from '@material-ui/core/LinearProgress';

const skillsRows = (classes, skills) => {
  return skills.map((skill, key) => {
    return (
      <div className={classes.skillsContainer} key={skill.key}>
        <Typography className={classes.skillName} >{skill.name}</Typography>
        <Typography className={classes.skillValue} >{skill.percentage}</Typography>
        <LinearProgress className={classes.skillBar} variant="determinate" value={skill.percentage} />
      </div>
    );
  });
};

const skills = ({ classes, skills, skillsTitle }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.skillsTitle} >{skillsTitle}</Typography>
      {skillsRows(classes, skills)}
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
