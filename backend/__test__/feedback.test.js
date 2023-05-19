// const app = require("../server")
// const supertest = require ("supertest")
// const mongoose = ("mongoose")

import supertest from "supertest";
import mongoose from "mongoose";
import app from "../server.js";

describe("Test endpoint responses", () => {
    beforeAll(async () => {
        await mongoose.connect("mongodb+srv://kaveenuththara:ebwQqH4Zx0QPHcLD@plannify.nprz6wl.mongodb.net/test", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
      });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Feedback get", async () => {
    const response = await supertest(app).get("/feedback");
    expect(response.body).toBeInstanceOf(Array);
    expect(response.status).toBe(200);
  });

    it("Feedback post", async () => {
    const response = await supertest(app).post("/feedback/add").send({
        "name": "Jhon",
        "email": "john@gmail.com",
        "subject": "test",
        "feedbackmsg": "test"
    });

    expect(response.status).toBe(200);
});

        
    
});
