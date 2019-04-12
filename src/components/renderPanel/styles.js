const styles = theme => {
  return {
    root: {
      margin: "0.5em",
      padding: "0.5em",
      width: "21cm",
      height: "29.7cm",
      overflow: "hidden"
    },
    header: {
      background: theme.palette.primary.main,
      width: "100%",
      height: "2em"
    },
    sidePanel: {
      float: "right",
      width: "25%",
      height: "100%",
      backgroundColor: theme.palette.grey["300"]
    },
    mainPanel: {
      float: "left",
      width: "75%",
      height: "100%"
    }
  };
};

export default styles;
