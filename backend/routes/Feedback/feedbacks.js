import { Router } from "express";
import Feedback from "../../models/Feedback/Feedback.js";

const router = Router();

//add feedback
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const feedback = req.body.feedback;
    
    const newFeedback = new Feedback({
        name,
        email,
        subject,
        feedback,
    });
    
    newFeedback
        .save()
        .then(() => {
        res.json("Feedback Added");
        })
        .catch((err) => {
        console.log(err);
        });
});

export default router;
