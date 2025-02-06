require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json()); 

const corsOptions = {
    origin: process.env.WEB_URL,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use("/api", routes); 

module.exports = app;
