import React from "react";
import Typography from "@material-ui/core/Typography";
import DevIcons from "devicon"; //eslint-disable-line
import PropTypes from "prop-types";
import { connect } from "react-redux";

const devSymbolRows = (devSymbols, classes) => {
  return devSymbols.map((devSymbol, id) => {
    return (
      <div className={classes.devSymbolContainer} key={devSymbol.key}>
        <div className={classes.iconContainer}>
          <i className={"devicon-"+devSymbol.icon+"-plain colored"}></i>
        </div>
        <Typography variant="subtitle1">{devSymbol.name}</Typography> 
      </div>
    );
  });
};

const experience = ({ classes, devSymbols, devSymbolTitle }) => {
  return (
    <div className={classes.root}>
     <Typography variant="subtitle2" className={classes.devSymbolsTitle} >{devSymbolTitle}</Typography> 
      <div className={classes.test}>
      {devSymbolRows(devSymbols, classes)}
      </div>
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    devSymbols: state.devSymbols,
    devSymbolTitle: state.devSymbolTitle
  };
};

experience.propTypes = {
  classes: PropTypes.object.isRequired,
  devSymbols: PropTypes.array.isRequired,
  devSymbolTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(experience);
