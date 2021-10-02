import { init, start } from "./server";
import { setup as setupRoutes } from "./routes";

init().then(server => {
  setupRoutes(server);
  start();
});

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection");
  console.error(err);
  process.exit(1);
});
