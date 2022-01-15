require("dotenv").config();

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json())



mongoose.connect(process.env.CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => app.listen(port, () => console.log(`Server running on ${port}`)))
  .catch((error) => console.log(error.message));
