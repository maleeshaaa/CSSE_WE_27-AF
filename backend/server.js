import express from "express";
import {config} from "dotenv";
import authRoutes from "./routes/auth.js";
import dbConnect from "./dbConnect.js";
import refreshTokenRoutes from "./routes/refreshToken.js"
import transactionRoutes from "./routes/transaction.js"
import userRoutes from "./routes/users.js";
import BlogRout from "./routes/blog/blog-route.js"
import VoucherRout from "./routes/DonateVoucher/voucher-route.js"
import DonateRout from "./routes/DonateVoucher/donate-route.js"
import PointsRout from "./routes/Points/points-route.js"
import cors from "cors";
import Feedback from "./routes/Feedback/feedbacks.js";
import PlaceRequests from "./routes/NewRequest/requests.js";


const app = express();

//allows us access environment variables like dotenv files
config();

dbConnect();

//allows us get json object in request body
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);
app.use("/api/transaction", transactionRoutes);

app.use("/blog", BlogRout);

app.use("/vouchers", VoucherRout)

app.use("/donations", DonateRout)

app.use("/points", PointsRout)

app.use("/feedback", Feedback)

app.use("/requests", PlaceRequests)

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));