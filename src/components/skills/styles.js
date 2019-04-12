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
      flexDirection: "column",
      textAlign: "left",
      marginTop: "0.4em"
    },
    skillName: {
      order: 0,
      width: "30%",
      marginRight:"0.1em"
    },
    skillValue: {
      order: 2,      
      width: "20%",
      marginRight:"0.1em" 
    },
    skillBar: {
      order: 1,
      width: "100%",
      height: "0.8em",
    }
  };
};

export default styles;
