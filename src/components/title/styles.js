const styles = theme => {
  return {
    root: {
      display: "flex",
      margin: "1em",
      textTransform: "uppercase"
    },
    header: {
      background: theme.palette.primary.main,
      width: "100%",
      height: "2em"
    },
    separator: {
      background: theme.palette.grey["300"],
      width: "10%",
      height: "0.1em",
      margin: "auto",
    },
    profilePicture:{
      paddingRight:"3em"
    }
  };
};

export default styles;
