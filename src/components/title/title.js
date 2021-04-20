import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const Title = ({ classes, name, role }) => {
  return (
    <div className={classes.root}>
      <div className={classes.profilePicture}>
       <img src="https://d3isma7snj3lcx.cloudfront.net/optim/images/news/30/3050806801/edmund-mcmillen-tease-un-nouveau-jeu-dans-l-univers-de-the-binding-of-isaac-fc6802a7__1920_1080__0-142-1000-465.jpg" alt="Girl in a jacket" width="100" height="100"></img>
      </div>
      <div className={classes.profile}>
        <Typography variant="h4">{name}</Typography>
        <div className={classes.separator}></div>
        <Typography variant="h6">{role}</Typography>
      </div>
      
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
