const styles = theme => {
  return {
    root: {
      margin: "1em",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    test:{
      display: "flex",
      flexWrap: "wrap",
    },
    iconContainer:{
      paddingTop: "0.2em",
      paddingRight: "0.4em"
    },
    devSymbolsTitle: {
      float: "left",
      textTransform: "uppercase",
      color: "black",
      margin: "0.5em 0.5em 1em 0em",
      width: "100%",
      textAlign: "left",
    },
    devSymbolContainer:{
      display: "flex",
      flexDirection: "row",
      paddingRight: "1.5em"
    },
  };
};

export default styles;
