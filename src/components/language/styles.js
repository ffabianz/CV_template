const styles = theme => {
  return {
    root: {
      margin: "1em 1em 1.5em 1em",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    languagesTitle: {
      float: "left",
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      margin: "0.5em 0.5em 1em 0em",
      width: "100%",
      textAlign: "left",
    },
    languageContainer:{
      display: "flex",
      flexDirection: "row",
    },
    flag:{
      paddingTop: "0.3em",
      paddingRight: "0.3em",
    },
    body1: {
      fontSize: "0.7em"
    }
  };
};

export default styles;
