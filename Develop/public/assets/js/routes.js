//GET
app.get("/api/notes", (req, res) => {
    res.json(noteText);
});

//POST
app.post("/api/notes", (req, res)=> {
console.info(`${req.method}`)
const newNote = req.body;
});
res.json(data)

//DELETE