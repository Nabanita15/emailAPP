const express = require("express");
const route = express.Router();

route.get("/home", (req,res) => {
    res.send("my server")
})

module.exports = route;
