const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/user");

const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/medicale_health")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);

// Error handling middleware
// app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
