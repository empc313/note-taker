//GET
app.get("/api/notes", (req, res) => {
    res.json(noteText);
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
  app.get('/api/notes', (req, res) => res.json(noteText));
  

//POST
app.post("/api/notes", (req, res)=> {
console.info(`${req.method}`)
const newNote = req.body;
});
res.json(data)

//DELETE