const Application = require("../models/application.model");

exports.createApplication = (data) => Application.create(data);
