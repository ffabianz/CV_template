import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const experienceRows = (experiences) => {
  return experiences.map((experience, key) => {
    return (
      <>
        <Typography>{experience.title}</Typography>
        <Typography>{experience.company}</Typography>
        <Typography>{experience.initialDate}</Typography>
        <Typography>{experience.finalDate}</Typography>
        <Typography>{experience.description}</Typography>
      </>
    )
  })
}

const experience = ({classes, experiences}) => {
  return (
    <div className={classes.root}>
      Profile
      {experienceRows(experiences)}
    </div>
  )
}

const mapsStateToProps = state => {
  return {
    experiences: state.experience,
  }
}

experience.propTypes = {
  classes: PropTypes.object,
  experiences: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(experience)
