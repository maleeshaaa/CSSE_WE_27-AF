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

  it("Request get", async () => {
    const response = await supertest(app).get("/requests");
    expect(response.body).toBeInstanceOf(Array);
    expect(response.status).toBe(200);
  });
});

describe("Test endpoint responses", () => {
  test("Request post", async () => {
    const response = await supertest(app).post("/requests/add").send({
        "province": "Western Province",
        "districts": ["Colombo", "Gampaha", "Kalutara"],
        "date": "2021-07-07T00:00:00.000+00:00",
        "days": 3
    });

    //Assertion 1: Check the response body
    // expect(response.body).toBeInstanceOf(Object);
    //Assertion 2: Check the response status
    expect(response.status).toBe(200);
    });
});

