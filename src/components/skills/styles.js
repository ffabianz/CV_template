const styles = theme => {
  return {
    root: {
      margin: "1em 1em 1.5em 1em",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    skillsTitle: {
      float: "left",
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      margin: "0.5em 0.5em 1em 0em",
      width: "100%",
      textAlign: "left",
    },
    skillsContainer: {
      display: "flex",
      flexDirection: "row",
      textAlign: "left",
    },
    skillName: {
      order: 0,
      marginRight:"0.5em" 
    },
    skillValue: {
      order: 1,
      marginRight:"0.5em" 
    },
    skillBar: {
      order: 2,
      width: "100%",
      height: "1em",
      marginTop: "0.05em"
    }
  };
};

export default styles;
