import { Router } from "express";
import Donate from "../../models/DonateVoucher/donate.js";

const router = Router();

//add donation
router.route("/add").post((req, res) => {
  const donateName = req.body.donateName;
  const donateAmount = req.body.donateAmount;
  const donatePoints = req.body.donatePoints;
  const donateDetails = req.body.donateDetails;

  const newDonate = new Donate({
    donateName,
    donateAmount,
    donatePoints,
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

export default router;