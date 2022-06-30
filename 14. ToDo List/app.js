//jshint esversion : 6
//npm install ejs

const express = require("express");
//const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["item 1", "item 2", "item 3"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    const day = date.getDate();
    res.render("list" , {listTitle: day, newListItems: items});

    //res.sendFile(__dirname + "/index.html");
    //res.send("Server is up and running");
});

app.post("/", function(req, res){

    const item =  req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list" , {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});