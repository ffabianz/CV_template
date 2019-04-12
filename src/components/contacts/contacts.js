import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Link from '@material-ui/core/Link';
import Phone from "@material-ui/icons/Phone";
import Location from "@material-ui/icons/LocationOn";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Computer from "@material-ui/icons/Computer";

const Contacts = ({
  classes,
  residence,
  number,
  mail,
  linkedin,
  linkedinUrl,
  github,
  githubUrl,
  contactTitle
}) => {
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.contactsTitle} >{contactTitle}</Typography>
    <div className={classes.contactContainer}>
      <div className={classes.locationContainer}>
        <Location />
        <Typography className={classes.iconSeparator}>{residence}</Typography>
      </div>
      <div className={classes.telephoneContainer}>
        <Phone /> 
        <Typography className={classes.iconSeparator}> {number} </Typography>
      </div>
      <div className={classes.mailContainer}>
        <Email />
        <Typography className={classes.iconSeparator}> {mail} </Typography>
      </div>
      <div className={classes.githubContainer}>
        <People/> 
        <Link href={linkedinUrl} variant="body2" className={classes.iconSeparator}> {linkedin} </Link>
      </div>
      <div className={classes.linkedinContainer}>
        <Computer/> 
        <Link href={githubUrl} variant="body2" className={classes.iconSeparator}> {github} </Link>
      </div>
    </div>
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    mail: state.mail,
    linkedinUrl: state.linkedinUrl,
    linkedin: state.linkedin,
    github: state.github,
    githubUrl: state.githubUrl,
    residence: state.residence,
    number: state.number,
    contactTitle: state.contactTitle
  };
};

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
  residence: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  contactTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(Contacts);
