import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Card } from "components/card";
import { useStyles } from "./style";
import { useFormContext, Controller } from "react-hook-form";
import { FormValues } from "components/layout";

export const SearchBar = () => {
  const { control } = useFormContext<FormValues>();
  const classes = useStyles();

  return (
    <div style={{ padding: "10px 50px" }}>
      <Card>
        <div style={{ height: 200 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FormControl sx={{ width: 150 }} size="small">
              <Controller
                control={control}
                name="searchin"
                render={({ field: { onChange, value } }) => {
                  return (
                    <Select<FormValues["searchin"]>
                      className={classes["searchIn"]}
                      placeholder="جست و جو در"
                      value={value}
                      onChange={onChange}
                    >
                      <MenuItem value={"car"}>نوع خودرو</MenuItem>
                      <MenuItem value={"job"}>نوع شغل</MenuItem>
                      <MenuItem value={"name"}>نام</MenuItem>
                    </Select>
                  );
                }}
              />
            </FormControl>
            <Controller
              name="searchValue"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <TextField
                    value={value}
                    onChange={onChange}
                    className={classes["searchField"]}
                    size="small"
                    sx={{ width: 300 }}
                  />
                );
              }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
