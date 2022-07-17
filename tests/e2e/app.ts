import { createHttpServer, createRouter } from "@istanbul/http";
import { createApp } from "@istanbul/app";
import { createViewApp } from "../../lib";

const app = createApp();
const server = createHttpServer();
app.register(server);

server.use(
  createViewApp({
    dir: "tests/views",
  })
);

createRouter({
  prefix: "views",
}).get("about", (req, res) => {
  res.render("about", {
    name: "istanbul",
    version: "0.0.1",
  });
});

createRouter({
  prefix: "views",
}).get("info", (req, res) => {
  res.render("info", {
    name: "John Doe",
    age: 22,
    job: "painter",
  });
});

export { app, server };
