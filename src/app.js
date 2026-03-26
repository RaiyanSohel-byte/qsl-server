const express = require("express");
const cors = require("cors");

const jobRoutes = require("./routes/job.routes");
const applicationRoutes = require("./routes/application.routes");
const { errorHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.use(errorHandler);

module.exports = app;
