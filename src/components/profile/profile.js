import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Profile = ({classes, profile}) => {
  return (
    <div className={classes.root}>
      Profile
      {profile}
    </div>
  )
}

const mapsStateToProps = state => {
  return {
    profile: state.profile,
  }
}

Profile.propTypes = {
  classes: PropTypes.object,
  profile: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(Profile)
