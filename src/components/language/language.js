import React from "react";
import Typography from "@material-ui/core/Typography";
import ReactCountryFlag from "react-country-flag";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const languageRows = (languages, classes) => {
  return languages.map((language, id) => {
    return (
      <div className={classes.languageContainer} key={language.key}>
        <ReactCountryFlag className={classes.flag} countryCode={language.countryCode} svg />
        <Typography variant="subtitle1">{language.name}</Typography>
        <Typography className={classes.body1} variant="body1">{language.language}</Typography>
        <Typography className={classes.body1} variant="body1">{language.finalDate}</Typography>
      </div>
    );
  });
};

const experience = ({ classes, languages, languageTitle }) => {
  return (
    <div className={classes.root}>
     <Typography className={classes.languagesTitle} >{languageTitle}</Typography> 
      {languageRows(languages, classes)}
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    languages: state.languages,
    languageTitle: state.languageTitle
  };
};

experience.propTypes = {
  classes: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  languageTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(experience);
