import { Server } from "@hapi/hapi";

import { demo } from "./pages/demo";
import { home } from "./pages/home";

export function setup(server: Server) {
  server.route({
    method: "GET",
    path: "/",
    handler: home,
  });
  server.route({
    method: "GET",
    path: "/demo",
    handler: demo,
  });
  server.route({
    method: 'GET',
    path: '/{filename}',
    handler: {
      file: function (request) {
        return request.params.filename;
      }
    }
});
}
