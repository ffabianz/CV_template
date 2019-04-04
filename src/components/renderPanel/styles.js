const styles = theme => {
  return {
    root: {
      border: "0.01em solid red",
      margin: "0.5em",
      padding: "0.5em",
      width: "21cm",
      minHeight: "29.7cm"
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
      backgroundColor: theme.palette.background.default
    },
    mainPanel: {
      float: "left",
      width: "75%",
      height: "100%"
    }
  };
};

export default styles;
