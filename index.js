const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConnection = require("./server.js");
const errorHandler = require("./middleware/errorHandler.js");
const tourRouter = require("./routes/v1/tour.route.js");
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Database connection
dbConnection();

// Route

app.use(`/api/v1/tours`, tourRouter);

// Global error handle
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bold.blue);
});
