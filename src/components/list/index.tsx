import { useUsersUsingGetQuery } from "services/endpoints";
import { useNavigate } from "react-router-dom";
import { Card } from "components/card";
import { CardContent } from "components/cardContent";
import Button from "@mui/material/Button";
import { useFormContext, useWatch } from "react-hook-form";
import { FormValues } from "components/layout";
import { findWord } from "utils/findWord";
import { useDebounce } from "utils/useDebounce";

const List = () => {
  const { control } = useFormContext<FormValues>();
  const { searchin, searchValue } = useWatch<FormValues>({ control });
  const { data, isLoading } = useUsersUsingGetQuery();
  const navigate = useNavigate();
  const handleMoreDetails = (id: string) => {
    navigate({ pathname: `details/${id}` });
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
            direction: "ltr",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          loading...
        </p>
      )}
    </>
  );
};

export { List };
