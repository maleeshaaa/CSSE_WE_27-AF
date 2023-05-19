// const app = require("../server")
// const supertest = require ("supertest")
// const mongoose = ("mongoose")

import supertest from "supertest";
import mongoose from "mongoose";
import app from "../server.js";

describe("Test endpoint responses", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Doante get", async () => {
    const response = await supertest(app).get("/donations");
    expect(response.body).toBeInstanceOf(Array);
    expect(response.status).toBe(200);
  });
});
