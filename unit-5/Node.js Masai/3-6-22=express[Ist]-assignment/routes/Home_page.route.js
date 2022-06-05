const { Router } = require('express');
const homePage = Router();

homePage.post("/", (req, res) => {
    res.status(201).send("Post Request");
})

module.exports = homePage;