// @ts-ignore
import request from "supertest";
import { server, app } from "./app";

const parseString = (res, cb) => {
  let data = Buffer.from("");
  res.on("data", function (chunk) {
    data = Buffer.concat([data, chunk]);
  });
  res.on("end", function () {
    cb(null, data.toString());
  });
};

describe("view e2e testing", () => {
  beforeAll((done) => {
    app.start();
    done();
  });

  it("info route testing", async () => {
    const msg = "<p>John Doe is a 22 years old painter</p>";
    const res = await request(server.instance)
      .get("/views/info")
      .buffer(true)
      .parse(parseString)
      .expect(200);

    expect(res.body).toBe(msg);
  });

  it("about route testing", async () => {
    const msg = "<p>galatajs's version is 0.1.1!</p>";
    const res = await request(server.instance)
      .get("/views/about")
      .buffer(true)
      .parse(parseString)
      .expect(200);

    expect(res.body).toBe(msg);
  });
});
