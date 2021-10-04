import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import Vision from "@hapi/vision";
import Ejs from 'ejs';
import path from 'path';
import Inert from "@hapi/inert";

export let server: Server;

export const init = async function (): Promise<Server> {
  server = Hapi.server({
    port: process.env.PORT || 4000,
    host: "0.0.0.0",
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'static')
      }
    }
  });

  // statics
  await server.register(Inert);

  // templates
  await server.register(Vision);
  server.views({
      engines: { ejs: Ejs },
      relativeTo: __dirname,
      path: 'views',

  });

  return server;
};

export const start = async function (): Promise<void> {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};
