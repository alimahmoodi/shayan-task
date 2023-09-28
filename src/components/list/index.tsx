import { UsersList, useUsersUsingGetQuery } from "services/endpoints";
import { useNavigate } from "react-router-dom";
import { Card } from "components/card";
import { CardContent } from "components/cardContent";
import Button from "@mui/material/Button";
import { useFormContext, useWatch } from "react-hook-form";
import { FormValues } from "components/layout";
import { findWord } from "utils/findWord";
import { useDebounce } from "utils/useDebounce";

export interface itemsInLocalStorage {
  history: UsersList[];
}

const List = () => {
  const { control } = useFormContext<FormValues>();
  const { searchin, searchValue } = useWatch<FormValues>({ control });
  const { data, isLoading } = useUsersUsingGetQuery();
  const navigate = useNavigate();
  const handleMoreDetails = (id: string) => {
    navigate({ pathname: `details/${id}` });

    const item = data?.find(({ id: _id }) => id === _id);
    const history = localStorage.getItem("history");

    const itemsInLocalStorage = history
      ? (JSON.parse(history) as itemsInLocalStorage)
      : null;
    const isAlreadyExist = itemsInLocalStorage?.history.find(
      ({ id: _id }) => _id === id
    );
    if (isAlreadyExist) return;

    if (itemsInLocalStorage?.history.length === 4) {
      itemsInLocalStorage.history.splice(3, 1);
    }

    const newHistory = itemsInLocalStorage
      ? JSON.stringify({
          history: [
            ...(!isAlreadyExist ? [item] : []),
            ...itemsInLocalStorage.history,
          ],
        })
      : JSON.stringify({
          history: [item],
        });

    localStorage.setItem("history", newHistory);
  };

  const search = useDebounce(500, searchValue ?? "");

  const filterData = data?.filter((item) => {
    if (searchin === "name") {
      return findWord(item.fullName, search);
    } else if (searchin === "car") {
      return findWord(item.vehicle, search);
    } else if (searchin === "job") {
      return findWord(item.jobType, search);
    } else return false;
  });

  return (
    <>
      {!isLoading ? (
        filterData?.map(({ id, ...rest }) => {
          return (
            <Card key={id}>
              <div>
                <CardContent {...rest} />
                <Button onClick={() => handleMoreDetails(id)}>
                  مشاهده جزییات
                </Button>
              </div>
            </Card>
          );
        })
      ) : (
        <p
          style={{
            height: "100%",
            textAlign: "center",
            direction: "rtl",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          لطفا صبرکنید...!
        </p>
      )}
    </>
  );
};

export { List };
