
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const helmet = require('helmet')
const compression = require('compression');



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet())
app.use(compression());

app.use(cors({
    origin : ["http://localhost:3000"]
}));

app.get("/", (req, res) => {
    fs.readFile("./db.json", { encoding: 'utf8' }, (error, files) => {
        res.status(200).send(files);
    })
})
app.post("/", (req, res) => {
     
    fs.readFile("./db.json", { encoding: "utf8" }, (err, data) => {
        const parse = JSON.parse(data);
        parse.todos = [...parse.todos, req.body]
        
    fs.writeFile("./db.json", JSON.stringify(parse), {encoding: "utf8"},(error, files) => {
        error ? console.log(error) : res.status(201).send("Todo Added!")
    }) 
    })

})

app.delete("/:id", (req, res) => {
    const { id } = req.params;
    fs.readFile("./db.json", { encoding: "utf8" }, (error, data) => {
        const parse = JSON.parse(data);
        parse.todos = parse.todos.filter(todo => {
            return todo.id !== id;
        })
        fs.writeFile("./db.json", JSON.stringify(parse), (error, data) => {
            error ? console.log(error) : res.send("Todo Deleted!")
        })
    })
})

app.all("*",(req,res) => {
  res.status(404).send("Page not found")
})

app.listen(8080, () => {
    console.log('Post Started at http://localhost:8080')
})