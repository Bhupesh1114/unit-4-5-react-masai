const express = require('express');
const homePage = require("./routes/Home_page.route");
// const cors = require('cors');     


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    const body = req.body;
    if (typeof body.id !== "number"  || typeof body.name !== "string") {
        return res.status(400).send("Bad Request");
    }
    if (body.name === undefined || body.description === undefined) {
        return res.status(400).send("Bad Request");
    }
    next();
})


app.use("/",homePage);

app.all("*", (req, res) => {
    res.status(404).send("Wrong Request");
})

// app.use(cors())


app.listen(8080, () => {
    console.log("Server started at http://localhost:8080")
})