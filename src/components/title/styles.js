const styles = theme => {
  return {
    root: {
      margin: "1em",
      textTransform: "uppercase"
    },
    header: {
      background: theme.palette.primary.main,
      width: "100%",
      height: "2em"
    },
    separator: {
      background: theme.palette.primary.main,
      width: "10%",
      height: "0.1em",
      margin: "auto",
    }
  };
};

export default styles;
