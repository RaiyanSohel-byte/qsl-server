const express = require("express");
const router = express.Router();

const applicationController = require("../controllers/application.controller");
const { validateApplication } = require("../validators/application.validator");

router.post("/", validateApplication, applicationController.createApplication);

module.exports = router;
