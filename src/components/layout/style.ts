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
    "&::-webkit-scrollbar": {
      width: 7,
      height: 7,
    },
    /* Track */
    "&::-webkit-scrollbar-track": {
      background: "#f8f8f8",
    },
    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#d1d1d1",
      borderRadius: 4,
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#d1d1d1",
      cursor: "pointer",
    },
  },
});
