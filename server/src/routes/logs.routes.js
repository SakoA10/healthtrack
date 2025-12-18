const express = require("express");
const { body } = require("express-validator");
const auth = require("../middleware/auth.middleware");
const {
  createLog,
  getLogs,
  getLogByDate,
  updateLogByDate,
  deleteLogByDate,
} = require("../controllers/logs.controller");

const router = express.Router();

// all routes protected
router.use(auth);

router.post(
  "/",
  [
    body("date").notEmpty().withMessage("date is required"),
    body("meals").isArray().withMessage("meals must be an array"),
    body("exercises").isArray().withMessage("exercises must be an array"),
    body("water").notEmpty().withMessage("water is required"),
  ],
  createLog
);

router.get("/", getLogs);
router.get("/:date", getLogByDate);
router.put("/:date", updateLogByDate);
router.delete("/:date", deleteLogByDate);

module.exports = router;
