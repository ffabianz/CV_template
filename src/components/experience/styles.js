const styles = theme => {
  
  const text = {
    margin: "0.5em",
    width: "100%",
    textAlign: "left",
  }

  const bold = {
    fontWeight: "400"
  }
  
  return {
    root: {
      margin: "1em"
    },
    roleTitle: {
      float: "left",
      textTransform: "uppercase",
      ...text,
      margin: "0 0 0 0.5em",
    },
    companyContainer: {
      display: "flex",
      float: "left",
      flexDirection: "column",
      ...text,
    },
    companyIdentifierContainer: {
      flexDirection: "row",
      display: "flex",
      float: "left",
      ...text,
      margin: "0 0 0.5em 0"
    },
    companyName: {
      order: 0,
      marginRight: "0.5em",
      paddingRight: "0.5em",
      borderRight: "0.1em solid black",
      ...bold
    },
    companyDate: {
      order: 1,
      ...bold
    },
    experienceTitleText: {
      color: theme.palette.primary.light,
      float: "left",
      margin: "0.5em 0.5em 1em 0.5em",
      width: "100%",
      textAlign: "left",
      textTransform: "uppercase"
    },
    experienceText: {
      margin: "0em 0.5em 0.5em 0",
      width: "100%",
      textAlign: "justify"
    }
  };
};

export default styles;
