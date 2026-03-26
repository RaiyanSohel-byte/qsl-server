exports.validateApplication = (req, res, next) => {
  const { job_id, name, email, resume_link } = req.body;

  if (!job_id || !name || !email || !resume_link) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(http|https):\/\/[^ "]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!urlRegex.test(resume_link)) {
    return res.status(400).json({ message: "Invalid URL" });
  }

  next();
};
