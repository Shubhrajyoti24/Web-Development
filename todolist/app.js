//jshint esversion : 6
//npm install ejs

const express = require("express");
//const https = require("https");
const bodyParser = require("body-parser");

const app = express();

let items = ["item 1", "item 2", "item 3"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list" , {kindOfDay: day, newListItems: items});

    //res.sendFile(__dirname + "/index.html");
    //res.send("Server is up and running");
});

app.post("/", function(req, res){
    let item =  req.body.newItem;
    
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});