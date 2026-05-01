require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRoutes");
const cartRouter = require("./routes/cartRoutes");
const connectDb = require("./config/db");

const app = express();


const PORT = 3000;

// Connect MongoDB
connectDb();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS (frontend Vite usually runs on 5173)
app.use(cors({
   origin: [
    "http://localhost:5173",
    "https://shopping-cart-client-ovdh.onrender.com"
  ],
  credentials: true
}));

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