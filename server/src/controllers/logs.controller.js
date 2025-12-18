const { validationResult } = require("express-validator");
const db = require("../db");

// CREATE
exports.createLog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const userId = req.user.id;
  const { date, meals, exercises, water } = req.body;

  try {
    await db.query(
      "INSERT INTO logs (user_id, date, meals, exercises, water) VALUES (?, ?, ?, ?, ?)",
      [userId, date, JSON.stringify(meals), JSON.stringify(exercises), water]
    );
    res.status(201).json({ message: "Log created ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// READ ALL
exports.getLogs = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query(
      "SELECT date, meals, exercises, water FROM logs WHERE user_id=? ORDER BY date DESC",
      [userId]
    );

    const logs = rows.map((r) => ({
      date: String(r.date).slice(0, 10),
      meals: typeof r.meals === "string" ? JSON.parse(r.meals) : r.meals,
      exercises: typeof r.exercises === "string" ? JSON.parse(r.exercises) : r.exercises,
      water: r.water,
    }));

    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// READ ONE
exports.getLogByDate = async (req, res) => {
  const userId = req.user.id;
  const { date } = req.params;

  try {
    const [rows] = await db.query(
      "SELECT date, meals, exercises, water FROM logs WHERE user_id=? AND date=? LIMIT 1",
      [userId, date]
    );

    if (!rows.length) return res.status(404).json({ message: "Log not found" });

    const r = rows[0];
    res.json({
      date: String(r.date).slice(0, 10),
      meals: typeof r.meals === "string" ? JSON.parse(r.meals) : r.meals,
      exercises: typeof r.exercises === "string" ? JSON.parse(r.exercises) : r.exercises,
      water: r.water,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// UPDATE
exports.updateLogByDate = async (req, res) => {
  const userId = req.user.id;
  const { date } = req.params;
  const { meals, exercises, water } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE logs SET meals=?, exercises=?, water=? WHERE user_id=? AND date=?",
      [JSON.stringify(meals), JSON.stringify(exercises), water, userId, date]
    );

    if (result.affectedRows === 0) return res.status(404).json({ message: "Log not found" });

    res.json({ message: "Log updated ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE
exports.deleteLogByDate = async (req, res) => {
  const userId = req.user.id;
  const { date } = req.params;

  try {
    const [result] = await db.query(
      "DELETE FROM logs WHERE user_id=? AND date=?",
      [userId, date]
    );

    if (result.affectedRows === 0) return res.status(404).json({ message: "Log not found" });

    res.json({ message: "Log deleted ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
