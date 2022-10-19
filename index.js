const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const dbConnection = require("./server.js");
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Database connection
dbConnection();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bold.blue);
});
