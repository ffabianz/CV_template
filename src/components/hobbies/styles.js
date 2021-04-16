const styles = theme => {
  return {
    root: {
      margin: "1em 1em 1.5em 1em",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    hobbiesTitle: {
      float: "left",
      textTransform: "uppercase",
      color: theme.palette.primary.light,
      margin: "0.5em 0.5em 1em 0em",
      width: "100%",
      textAlign: "left",
    },
    hobbiesContainer: {
      display: "flex",
      flexDirection: "row",
      textAlign: "left",
      marginTop: "0.4em",
    },
    hobbyName: {
      order: 0,
      width: "30%",
      marginRight:"0.1em",
      marginTop:"0.2em",
      marginLeft:"0.3em"
    },
    hobbyValue: {
      order: 2,      
      width: "20%",
      marginRight:"0.1em" 
    },
    hobbyBar: {
      order: 1,
      width: "100%",
      height: "0.8em",
    }
  };
};

export default styles;
