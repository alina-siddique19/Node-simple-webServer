
const express = require("express");

const app = express();

app.get("/" , (req, res) => {
    return res.send("hello from home page");
});

app.get("/about" , (req, res) => {
    return res.send('hello ${req.query.name}');
});

app.get("/name" , (req, res) => {
    return res.send("hello I'm alina");
});

app.listen(8000, () => console.log("Server Started!"));