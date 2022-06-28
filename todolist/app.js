//jshint esversion : 6
//npm install ejs

const express = require("express");
//const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

//app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    
        default: console.log("Error!");
            break;
    }

    res.render('list', {kindOfday: day});

    // if(currentDay===6 || currentDay===0){
    //     day = "Weekend";
    // }
    // else {
    //     day = "Weekday";
    // }
    // res.render('list', {kindOfday: day});

    //res.sendFile(__dirname + "/index.html");
    //res.send("Server is up and running");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});