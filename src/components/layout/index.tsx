import { SearchBar } from "components/searchBar";
import { useStyles } from "./style";
import { List } from "components/list";
import { useForm, FormProvider } from "react-hook-form";
export interface FormValues {
  searchin: "car" | "name" | "job";
  searchValue: string;
}

const Layout = () => {
  const classes = useStyles();
  const methods = useForm<FormValues>({
    defaultValues: { searchin: "name", searchValue: "" },
  });
  return (
    <FormProvider {...methods}>
      <div className={classes["layout"]}>
        <SearchBar />
        <div className={classes["list"]}>
          <List />
        </div>
      </div>
    </FormProvider>
  );
};

export { Layout };
