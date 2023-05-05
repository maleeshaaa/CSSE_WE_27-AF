
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");


const authRoutes = require("./routes/auth.js");
const refreshTokenRoutes = require("./routes/refreshToken.js");
const userRoutes = require("./routes/users.js");
const connectDB = require("./config/db.js");


const app = express();

// const cart = require("./routes/cartRoute"); // added

var cors = require('cors')

app.use(cors())

// connect database
connectDB();

app.use("/api", authRoutes);
app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api/users", userRoutes);

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));


// app.use("/api/cart", cart); 

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 