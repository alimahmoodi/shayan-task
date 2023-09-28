import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Card } from "components/card";
import { useStyles } from "./style";
import { useFormContext, Controller } from "react-hook-form";
import { FormValues } from "components/layout";
import { useEffect, useState } from "react";
import { itemsInLocalStorage } from "components/list";
import { UsersList } from "services/endpoints";
import { HistoryItem } from "components/historyItems";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<UsersList[]>([]);
  const { control } = useFormContext<FormValues>();
  const classes = useStyles();

  useEffect(() => {
    try {
      const history = localStorage.getItem("history");
      const itemsInLocalStorage: itemsInLocalStorage = history
        ? JSON.parse(history)
        : null;
      if (itemsInLocalStorage) {
        setHistory(itemsInLocalStorage.history);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleOnClickHistoryItem = (id: string) => {
    navigate({ pathname: `details/${id}` });
  };

  return (
    <div style={{ padding: "10px 50px" }}>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
          <div style={{ marginTop: 10 }}>
            {history.map(({ fullName, gender, jobTitle, vehicle, id }) => {
              return (
                <HistoryItem
                  {...{ fullName, gender, jobTitle, vehicle, id }}
                  onClick={handleOnClickHistoryItem}
                />
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};
