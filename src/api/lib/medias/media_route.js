const express = require("express")
const router = express.Router();

router
    .get("/medias", (req, res) => {
        res.send("bien")
    })

module.exports = { router }