const express = require("express");
const router = express.Router();
const path = require("path");
const dirHTML = path.join(__dirname, "../public/")

// Code to get and post goes here
router.get("/", function(req, res) {
    res.sendFile(path.join(dirHTML, "index.html"));
});

router.get("/portfolio", function(req, res) {
    res.sendFile(path.join(dirHTML, "portfolio.html"));
});

router.get("/contact", function(req, res) {
    res.sendFile(path.join(dirHTML, "contact.html"));
});

module.exports = router;