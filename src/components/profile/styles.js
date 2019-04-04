const styles = theme => {
  return {
    root: {
      margin: "1em"
    },
    profileTitleText: {
      color: theme.palette.primary.light,
      float: "left",
      margin: "0.5em",
      width: "100%",
      textAlign: "left",
      textTransform: "uppercase"
    },
    profileText: {
      margin: "0.5em",
      width: "100%",
      textAlign: "justify"
    }
  };
};

export default styles;
