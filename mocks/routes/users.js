const { fakeData } = require("../../mockUsersList");

module.exports = [
  {
    id: "get-users", // id of the route
    url: "/api/users", // url in path-to-regexp format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        type: "json", // variant type
        options: {
          status: 200,
          body: fakeData,
        },
      },
    ],
  },
];
