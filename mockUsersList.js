const { faker } = require("@faker-js/faker/locale/fa");

const fakeData = [...new Array(50)].map((_, index) => {
  return {
    fullName: faker.person.fullName({
      gender: index % 2 === 0 ? "female" : "male",
    }),
    gender: index % 2 === 0 ? "female" : "male",
    id: index.toString(),
    jobTitle: faker.person.jobTitle(),
    jobType: faker.person.jobType(),
    vehicle: faker.vehicle.manufacturer(),
    description: faker.lorem.paragraph(),
  };
});

module.exports = { fakeData };
