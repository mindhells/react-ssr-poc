import { Server } from "@hapi/hapi";

import { init } from "../src/server";
import { setup as setupRoutes } from "../src/routes";

describe("smoke test", () => {
    let server: Server;

    beforeEach((done) => {
        init().then(s => {
          server = s;
          setupRoutes(server);
          done();
        });
    })
    afterEach((done) => {
        server.stop().then(() => done());
    });

    it("index responds", async () => {
        const res = await server.inject({
            method: "get",
            url: "/"
        });
        expect(res.statusCode).toBe(200);
        expect(res.result).toBe("Hello world");
    });
})
