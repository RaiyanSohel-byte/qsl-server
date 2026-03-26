const Application = require("../models/application.model");

exports.createApplication = async (req, res) => {
  try {
    const { job_id, name, email, resume_link, cover_note } = req.body;

    const application = await Application.create({
      job_id,
      name,
      email,
      resume_link,
      cover_note,
      user: req.user.id,
      created_at: new Date(),
    });

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
