import { useUsersUsingGetQuery } from "services/endpoints";
import { Card } from "./card";
import { CardContent } from "./card/cardContent";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { data, isLoading } = useUsersUsingGetQuery();
  const navigate = useNavigate();
  const handleMoreDetails = () => {
    navigate({ pathname: "details" });
  };
  return (
    <>
      {!isLoading ? (
        data?.map(({ id, ...rest }) => {
          return (
            <Card key={id}>
              <div>
                <CardContent {...rest} />
                <button onClick={handleMoreDetails}>More Details!</button>
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
