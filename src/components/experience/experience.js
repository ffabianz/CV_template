import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const experienceRows = (experiences, classes) => {
  return experiences.map((experience, key) => {
    return (
      <div key={experience.key}>
        <Typography variant="subtitle2" className={classes.roleTitle}>{experience.title}</Typography>
        <div className={classes.companyContainer}>
          <div className={classes.companyIdentifierContainer}>
            <Typography variant="body1" className={classes.companyName}>{experience.company}</Typography>
            <Typography variant="body1" className={classes.companyDate}>{experience.initialDate} - {experience.finalDate} </Typography>
          </div>
          <Typography className={classes.experienceText}>{experience.description}</Typography>
        </div>
      </div>
    );
  });
};

const experience = ({ classes, experiences, experienceTitle }) => {
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.experienceTitleText}>{experienceTitle}</Typography> 
      {experienceRows(experiences, classes)}
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    experiences: state.experience,
    experienceTitle: state.experienceTitle
  };
};

experience.propTypes = {
  classes: PropTypes.object.isRequired,
  experiences: PropTypes.array.isRequired,
  experienceTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(experience);
