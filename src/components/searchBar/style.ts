import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchIn: {
    borderRadius: "0px 4px 4px 0px",
  },
  searchField: {
    "& .MuiInputBase-root": {
      borderRadius: "4px 0px 0px 4px",
      borderRight: "none",
    },
  },
});
