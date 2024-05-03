const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require('method-override');

const { v4: uuidv4 } = require('uuid');
const { error } = require("console");

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`App is listen on port = ${port}`);
});

app.get("/", (req, res) => {
    console.log("new incoming request");
    res.send("it is a root path!");
});

app.get("/show", (req, res) => {
    return res.status(400).render("404.html");
});

app.get("/show/:id", (req, res) => {
    let { id } = req.params;

    let p = tasks.find((p) => p.id === id);
    if (p) {
        res.render("show.ejs", { p });
    }
    else {
        return res.status(400).render("404.html");
    };
});

app.get("/taskmanager", (req, res) => {
    tasks.forEach((p) => {
        res.render("index.ejs", { p });
    })
});

app.post("/show/:id", (req, res) => {
    let { id, username } = req.body;

    console.log(id);
    console.log(username);
    console.log(tasks);

    let p = tasks.find((p) => p.id === id);
    if (p.username === username) {
        res.render("show.ejs", { p });
    }
    else {
        return res.status(400).render("404.html");
    };

    // logic - 2    
    // let task = tasks.filter((P) => {
    //     if (id === P.id) {
    //         return P;
    //     };
    // });
    // console.log(task);
    // console.log(task[0]);
    // let p = task[0];
    // if (p) {
    //     if (username === p.username) {
    //         res.render("show.ejs", { p });
    //     }
    // }
    // else {
    //     return res.status(400).render("404.html");
    // };
    // console.log(task);

});

app.get("/newuser", (req, res) => {
    res.render("newuser.ejs");
});

app.post("/taskmanager", (req, res) => {
    let { username, id } = req.body;
    let { tasklist } = req.body;
    let task = [];
    console.log(tasklist);
    tasklist.forEach((P) => {
        console.log(P);
        if (P != "") {
            task.push(P);
        }
    });
    console.log(task);
    tasks.push({ username, id, task });
    res.redirect("/taskmanager");
});

app.get("/show/:id/newtask", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let task = tasks.find((p) => p.id === id);
    console.log(task);
    if (task) {
        res.render("newtask.ejs", { task });
    }
    else {
        return res.status(400).render("404.html");
    };
});

app.patch("/show/:id", (req, res) => {
    let { id } = req.params;

    let task = tasks.find((P) => P.id === id);
    let edittask = req.body.tasklist;
    console.log(edittask);

    // let neweditedtask = edittask.filter((task) => (task != ""));
    task.task = edittask.filter((task) => (task != ""));

    res.redirect(`/show/${id}`);
});

let tasks = [
    {
        id: "a1",
        username: "Ravi_vataliya",
        task: ["sleep", "eat", "read"]
    },
    {
        id: "a2",
        username: "Meet_dhameliya",
        task: ["eat"]
    },
    {
        id: "a3",
        username: "Preet_fladu",
        task: ["walk"]
    },
]

module.exports = tasks;