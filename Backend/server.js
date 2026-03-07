const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(express.json());

// CORS
app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://betterside.onrender.com"
  ],
  credentials: true
}));

// ROUTES
app.use("/api/auth", require("./routes/auth"));

const dashboardRoutes = require("./routes/dashboard");
app.use("/api/dashboard", dashboardRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});