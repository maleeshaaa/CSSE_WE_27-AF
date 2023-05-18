import { Router } from "express";
import Request from "../../models/NewRequest/Request.js";

const router = Router();

//add new place
router.route("/add").post((req, res) => {
    const province = req.body.province
    const districts = req.body.districts;
    const date = req.body.date;
    const days = req.body.days;

    const NewRequest = new Request({
        province,
        districts,
        date,
        days,
    });

    NewRequest
        .save()
        .then(() => {
        res.json("Request Added");
        })
        .catch((err) => {
        console.log(err);
        });
});

export default router;