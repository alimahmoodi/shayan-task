import { useUsersUsingGetQuery } from "services/endpoints";
import { useNavigate } from "react-router-dom";
import { Card } from "components/card";
import { CardContent } from "components/cardContent";
import Button from "@mui/material/Button";

const List = () => {
  const { data, isLoading } = useUsersUsingGetQuery();

  const navigate = useNavigate();
  const handleMoreDetails = (id: string) => {
    navigate({ pathname: `details/${id}` });
  };
  return (
    <>
      {!isLoading ? (
        data?.map(({ id, ...rest }) => {
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
