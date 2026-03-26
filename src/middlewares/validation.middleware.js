exports.validateJob = (req, res, next) => {
  const { title, company, location, category, description } = req.body;

  if (!title || !company || !location || !category || !description) {
    return res.status(400).json({
      message: "All job fields are required",
    });
  }

  if (title.length < 3) {
    return res.status(400).json({
      message: "Title must be at least 3 characters",
    });
  }

  if (description.length < 10) {
    return res.status(400).json({
      message: "Description must be at least 10 characters",
    });
  }

  next();
};
