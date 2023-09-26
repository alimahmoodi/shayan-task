module.exports = (config) => {
  return {
    mock: {
      collections: {
        selected: "users-collection",
      },
      routes: {
        delay: 3000,
      },
    },
  };
};
