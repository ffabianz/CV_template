const styles = theme => {
  
  const margin = {
    margin: "0 0 0.5em 0"
  }

  const displayFlexRow = {
    display: "flex",
    flexDirection: "row"
  }
  
  return {
    root: {
      margin: "1em 1em 1.5em 1em",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    contactContainer: {
      display: "flex",
      flexDirection: "column"
    },
    contactsTitle: {
      float: "left",
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      margin: "0.5em 0.5em 1em 0em",
      width: "100%",
      textAlign: "left",
    },
    iconSeparator: {
      paddingTop: "0.4em",
      marginLeft: "0.5em",
      fontSize: "0.7em",
      color: theme.palette.text.primary,
      fontWeight: "400"
    },
    telephoneContainer: {
      order: 0,
      ...margin,
      ...displayFlexRow
    },
    mailContainer: {
      order: 1,
      ...margin,
      ...displayFlexRow
    },
    githubContainer: {
      order: 2,
      ...margin,
      ...displayFlexRow
    },
    linkedinContainer: {
      order: 3,
      ...margin,
      ...displayFlexRow
    },
    locationContainer: {
      order: 4,
      ...margin,
      ...displayFlexRow
    }
  };
};

export default styles;
