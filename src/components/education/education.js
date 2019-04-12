import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const educationRows = education => {
  return education.map((institute, key) => {
    return (
      <div key={institute.key}>
        <Typography>{institute.degree}</Typography>
        <Typography>{institute.institute}</Typography>
        <Typography>{institute.initialDate}</Typography>
        <Typography>{institute.finalDate}</Typography>
      </div>
    );
  });
};

const experience = ({ classes, education, educationTitle }) => {
  return (
    <div className={classes.root}>
     <Typography className={classes.educationsTitle} >{educationTitle}</Typography> 
      {educationRows(education)}
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
