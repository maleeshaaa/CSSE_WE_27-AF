import {Router} from "express";
import Voucher from "../../models/DonateVoucher/voucher.js";

const router = Router();

//add voucher
router.route("/add").post((req, res) => {
    const voucherName = req.body.voucherName;
    const voucherPoints = req.body.voucherPoints;
    const voucherCode = req.body.voucherCode;
    const voucherDetails = req.body.voucherDetails;
  
    const newVoucher = new Voucher({
      voucherName,
      voucherPoints,
      voucherCode,
      voucherDetails
      ,
    });
  
    newVoucher
      .save()
      .then(() => {
        res.json("voucher Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  //get all voucher
  router.route("/").get((req, res) => {
    const vouchers = Voucher.find()
    .then((vouchers) => {
        res.json(vouchers)
    })
    .catch((err) => {
        console.log(err);
      });
  }
  
  )
  
  //get specific voucher
  router.route("/:id").get((req, res) => {
      const vouchers = Voucher.findById(req.params.id)
          .then((vouchers) => {
          res.json(vouchers);
          })
          .catch((err) => {
          console.log(err);
          });
      }
  );
  
  export default router;