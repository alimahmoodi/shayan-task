import { Card } from "./card";
import { CardContent } from "./card/cardContent";
import { useEffect, useState } from "react";

interface CardContentProps {
  fullName: string;
  sex: string;
  jobTitle: string;
  jobType: string;
  vehicle: string;
  id: number;
}

const List = () => {
  const [fakeData, setFakeData] = useState<CardContentProps[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3100/api/users")
      .then((res) => res.json())
      .then((data) => {
        setFakeData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {!loading ? (
        fakeData.map(({ id, ...rest }) => {
          return (
            <Card key={id}>
              <CardContent {...rest} />
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
