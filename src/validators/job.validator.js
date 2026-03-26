exports.validateJob = (req, res, next) => {
  const { title, company, location, category, description } = req.body;

  if (!title || !company || !location || !category || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  next();
};
