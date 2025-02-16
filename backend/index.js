const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ws = require("ws");

const uri = "mongodb://localhost:27017/tik-tak";
const OPT = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri, OPT, (err) => {
    if (err) {
        console.log("Error connecting to database: ", err);
    } else {
        console.log("Connected to database");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})