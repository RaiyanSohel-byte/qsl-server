const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const validateJob = require("../middlewares/validation.middleware").validateJob;
const { protect, isAdmin } = require("../middlewares/auth.middleware");

router.get("/", jobController.getJobs);
router.get("/:id", jobController.getJobById);

router.post("/", protect, isAdmin, validateJob, jobController.createJob);
router.delete("/:id", protect, isAdmin, jobController.deleteJob);

module.exports = router;
