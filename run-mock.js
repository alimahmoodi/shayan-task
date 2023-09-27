const { createServer } = require("@mocks-server/main");

const core = createServer();

core.start().then(() => {
  core.mock.collections.select("users-collection");
});
