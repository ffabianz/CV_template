import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const educationRows = (education, classes) => {
  return education.map((institute, key) => {
    return (
      <div key={institute.key}>
        <Typography variant="subtitle1">{institute.degree}</Typography>
        <Typography className={classes.body1} variant="body1">{institute.institute}</Typography>
        <Typography className={classes.body1} variant="body1">{institute.finalDate}</Typography>
      </div>
    );
  });
};

const experience = ({ classes, education, educationTitle }) => {
  return (
    <div className={classes.root}>
     <Typography className={classes.educationsTitle} >{educationTitle}</Typography> 
      {educationRows(education, classes)}
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    education: state.education,
    educationTitle: state.educationTitle
  };
};

experience.propTypes = {
  classes: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  educationTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(experience);
