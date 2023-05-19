import { Router } from "express";
import Payment from "../../models/Payment/Payment.js";

const router = Router();

//add payment
router.route( "/add" ).post( ( req, res ) =>
{
  const userID = req.body.userID;
  // const packageID = req.body.packageID;
  const cardName = req.body.cardName;
  const cardNumber = req.body.cardNumber;
  const expDate = req.body.expDate;
  const cvv = req.body.cvv;

  const newPayment = new Payment( {
    userID,
    // packageID,
    cardName,
    cardNumber,
    expDate,
    cvv,
  });

  newPayment
    .save()
    .then(() => {
      res.json("Payment added successfully...");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all payment
router.route("/").get((req, res) => {
  const payments = Payment.find()
    .then((payments) => {
      res.json(payments);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get specific payment
router.route("/:id").get((req, res) => {
  Payment.findById(req.params.id)
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
