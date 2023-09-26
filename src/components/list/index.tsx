import { faker } from "@faker-js/faker/locale/fa";
import { Card } from "./card";
import { CardContent } from "./card/cardContent";

const fakeData = [...new Array(450)].map((_, index) => {
  return {
    fullName: faker.person.fullName({
      sex: index % 2 === 0 ? "female" : "male",
    }),
    sex: index % 2 === 0 ? "خانم" : "آقا",
    id: index,
    jobTitle: faker.person.jobTitle(),
    jobType: faker.person.jobType(),
    vehicle: faker.vehicle.manufacturer(),
  };
});

const List = () => {
  return (
    <>
      {fakeData.map(({ id, ...rest }) => {
        return (
          <Card key={id}>
            <CardContent {...rest} />
          </Card>
        );
      })}
    </>
  );
};

export { List };
