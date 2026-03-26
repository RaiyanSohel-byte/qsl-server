const express = require("express");
const router = express.Router();

const jobController = require("../controllers/job.controller");
const { validateJob } = require("../validators/job.validator");
const { isAdmin } = require("../middlewares/auth.middleware");

router.get("/", jobController.getJobs);
router.get("/:id", jobController.getJobById);
router.post("/", isAdmin, validateJob, jobController.createJob);
router.delete("/:id", isAdmin, jobController.deleteJob);

module.exports = router;
