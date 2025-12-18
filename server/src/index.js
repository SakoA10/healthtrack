const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
const db = require("./db");

// Routes
const authRoutes = require("./routes/auth.routes");

// Health check
app.get("/", (req, res) => {
  res.json({ message: "HealthTrack backend is running ✅" });
});

// DB test
app.get("/db-test", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS ok");
    res.json({ db: "connected ✅", result: rows[0] });
  } catch (err) {
    res.status(500).json({ db: "failed ❌", error: err.message });
  }
});

// Auth routes
app.use("/api/auth", authRoutes);

const logsRoutes = require("./routes/logs.routes");
app.use("/api/logs", logsRoutes);


// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
