import supertest from "supertest";
import mongoose from "mongoose";
import app from "../server.js";
import Payment from "../models/Payment/Payment.js"; // Update the path to your Payment model

describe("Test endpoint responses", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Payment Get", async () => {
    const payment = new Payment({
      // Set necessary properties for testing
      userID: "exampleUserID",
      cardName: "John Doe",
      cardNumber: "1234567890",
      expDate: "12/24",
      cvv: 123,
    });
    await payment.save(); // Save the payment instance to the database

    const response = await supertest(app).get("/payment");
    expect(response.body).toBeInstanceOf(Array);
    expect(response.status).toBe(200);

    // Clean up the test data after the test
    await Payment.findByIdAndDelete(payment._id);
  });
});
