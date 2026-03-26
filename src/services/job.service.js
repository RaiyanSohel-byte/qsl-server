const Job = require("../models/job.model");

exports.getJobs = () => Job.find();

exports.getJobById = (id) => Job.findById(id);

exports.createJob = (data) => Job.create(data);

exports.deleteJob = (id) => Job.findByIdAndDelete(id);
