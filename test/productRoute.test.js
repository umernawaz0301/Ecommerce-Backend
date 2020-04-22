process.env.NODE_ENV = "test";
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../app");
const conn = require("../db/index");

describe("Product Endpoints", () => {
  before(async () => {
    await conn.connect().catch((err) => console.log(new Error(err.message)));
  });

  it("should create a new product", async () => {
    // try {
    await request(app)
      .post("/product/add")
      .send({
        name: "testddddss",
        description: "test descriptiondddd sss",
        price: 30,
        currency: "USD",
        image: "testddd",
        size: "all sizesdd",
        quantity: 10,
      })
      .then((res) => {
        const body = res.body;
        // console.log("resres", body);
        expect(body).to.contain.property("_id");
        // done();
      })
      .catch((err) => {
        console.log(new Error(err.message));
      });
  });

  it("should list of all prodcts", async () => {
    // try {
    await request(app)
      .get("/product/list")
      .then((res) => {
        const response = res.text;
        // console.log("resres", response);

        // expect(response).to.contain.property("_id");
        // done();
      })
      .catch((err) => {
        console.log(new Error(err.message));
      });
  });

  after(async () => {
    await conn.close().catch((err) => {
      console.log(new Error(err.message));
    });
  });
});
