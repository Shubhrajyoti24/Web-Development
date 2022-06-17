const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("Hello");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at : shubhra24das@gmail.com");        //Route to contact page
});

app.get("/about", function(request, response) {
  response.send("Hey! I am Shubhra. I love beer and code.");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
