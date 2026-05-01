require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRoutes");
const cartRouter = require("./routes/cartRoutes");
const connectDb = require("./config/db");

const app = express();


const PORT = process.env.PORT || 3000;

// Connect MongoDB
connectDb();

// Middlewares
app.set("trust proxy", 1);
app.use(cors({
  origin: "https://shopping-cart-client-ovdh.onrender.com",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/cart", cartRouter);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});