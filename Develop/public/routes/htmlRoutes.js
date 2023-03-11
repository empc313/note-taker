const express = require("express");
const app = require("express");

//GET notes html
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
//GET index html
app.get("/api",(req,res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"));
});

module.exports = app;
