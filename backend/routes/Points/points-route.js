import { Router } from "express";
import Points from "../../models/Points/Points.js";

const router = Router();

//add Points
router.route("/add").post((req, res) => {
    const userId = req.body.userId;
    const pointAmount = req.body.pointAmount;
  
    const newPoints = new Points({
      userId,
      pointAmount,
    });
  
    newPoints
      .save()
      .then(() => {
        res.json("Points Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });

//get all PointsUsers
router.route("/").get((req, res) => {
    const points = Points.find()
      .then((points) => {
        res.json(points);
      })
      .catch((err) => {
        console.log(err);
      });
  });

export default router;