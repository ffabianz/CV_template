import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import ImportContacts from "@material-ui/icons/ImportContacts";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";



const hobbies = ({ classes, hobbies, hobbiesTitle }) => {
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" className={classes.hobbiesTitle} >{hobbiesTitle}</Typography>
      <div className={classes.hobbiesContainer} key={hobbies[0].key}>
        <FitnessCenter color="action" />
        <Typography className={classes.hobbyName} >{hobbies[0].name}</Typography>
      </div>
      <div className={classes.hobbiesContainer} key={hobbies[1].key}>
        <ImportContacts />
        <Typography className={classes.hobbyName} >{hobbies[1].name}</Typography>
      </div>
      <div className={classes.hobbiesContainer} key={hobbies[2].key}>
        <VideogameAsset color="secondary"/>
        <Typography className={classes.hobbyName} >{hobbies[2].name}</Typography>
      </div>
      <div className={classes.hobbiesContainer} key={hobbies[3].key}>
        <FlightTakeoff color="primary"/>
        <Typography className={classes.hobbyName} >{hobbies[3].name}</Typography>
      </div>
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    hobbies: state.hobbies,
    hobbiesTitle: state.hobbiesTitle
  };
};

hobbies.propTypes = {
  classes: PropTypes.object.isRequired,
  hobbies: PropTypes.array.isRequired,
  hobbiesTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(hobbies);
