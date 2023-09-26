import { SearchBar } from "components/searchBar";
import { useStyles } from "./style";
import { List } from "components/list";

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes["layout"]}>
      <SearchBar />
      <div className={classes["list"]}>
        <List />
      </div>
    </div>
  );
};

export { Layout };
