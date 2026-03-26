const applicationService = require("../services/application.service");

exports.createApplication = async (req, res, next) => {
  try {
    const application = await applicationService.createApplication(req.body);
    res.status(201).json(application);
  } catch (err) {
    next(err);
  }
};
