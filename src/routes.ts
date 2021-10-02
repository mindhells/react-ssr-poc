import { Server } from "@hapi/hapi";

import { home } from "./pages/home";

export function setup(server: Server) {
  server.route({
    method: "GET",
    path: "/",
    handler: home,
  });
}
