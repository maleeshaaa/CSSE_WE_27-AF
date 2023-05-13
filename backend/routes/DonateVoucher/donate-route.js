import { Router } from "express";
import Donate from "../../models/DonateVoucher/donate.js";

const router = Router();

//add donation
router.route("/add").post((req, res) => {
  const donateName = req.body.donateName;
  const donatePoints = req.body.donatePoints;
  const donateAmount = req.body.donateAmount;
  const donateDetails = req.body.donateDetails;

  const newDonate = new Donate({
    donateName,
    donatePoints,
    donateAmount,
    donateDetails,
  });

  newDonate
    .save()
    .then(() => {
      res.json("Donation Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all donations
router.route("/").get((req, res) => {
  const donates = Donate.find()
    .then((donates) => {
      res.json(donates);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get specific donation
router.route("/:id").get((req, res) => {
  const donates = Donate.findById(req.params.id)
    .then((donates) => {
      res.json(donates);
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete donation
router.route("/:id").delete((req, res) => {
  Donate.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Donation Deleted");
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;