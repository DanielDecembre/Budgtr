const express = require("express");
const app = express();
const budget = require("./models/budget");
var bodyParser = require("body-parser");


// middleware
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: false }))

// index
app.get("/budgets", (req, res) => {
    res.render("index.ejs", { allBudget: budget});
});

// new 
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
});

// post
app.post("/budget", (req, res) => {
    budget.push(req.body);
    console.log(budget);
    res.redirect("/budgets");
});


// show
app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", { allBudget: budget[req.params.index] });
});

app.listening(3000, () => {
    console.log(`Express is listening on port 3000`);
});