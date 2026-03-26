const jobService = require("../services/job.service");

exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await jobService.getJobs();
    res.json(jobs);
  } catch (err) {
    next(err);
  }
};

exports.getJobById = async (req, res, next) => {
  try {
    const job = await jobService.getJobById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    next(err);
  }
};

exports.createJob = async (req, res, next) => {
  try {
    const job = await jobService.createJob(req.body);
    res.status(201).json(job);
  } catch (err) {
    next(err);
  }
};

exports.deleteJob = async (req, res, next) => {
  try {
    const job = await jobService.deleteJob(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "Job deleted" });
  } catch (err) {
    next(err);
  }
};
