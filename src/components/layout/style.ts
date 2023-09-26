import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  layout: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  },
  list: {
    flex: 1,
    overflowY: "auto",
    padding: "10px 50px 10px 50px",
  },
});
