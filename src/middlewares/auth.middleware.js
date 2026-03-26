exports.isAdmin = (req, res, next) => {
  const isAdmin = true;

  if (!isAdmin) {
    return res.status(403).json({ message: "Admin only" });
  }

  next();
};
