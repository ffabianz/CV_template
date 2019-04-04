import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const Title = ({ classes, name, role }) => {
  return (
    <div className={classes.root}>
      <Typography>{name}</Typography>
      <Typography>{role}</Typography>
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    name: state.name,
    role: state.role
  };
};

Title.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(Title);
