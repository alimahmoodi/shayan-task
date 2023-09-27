const { faker } = require("@faker-js/faker/locale/fa");

const fakeData = [...new Array(450)].map((_, index) => {
  return {
    fullName: faker.person.fullName({
      gender: index % 2 === 0 ? "female" : "male",
    }),
    gender: index % 2 === 0 ? "خانم" : "آقا",
    id: index,
    jobTitle: faker.person.jobTitle(),
    jobType: faker.person.jobType(),
    vehicle: faker.vehicle.manufacturer(),
  };
});

module.exports = { fakeData };
