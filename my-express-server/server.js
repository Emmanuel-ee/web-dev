const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>")

})

app.get("/contact", function(req, res){
    res.send("Contact me at: ememeemmanuel3@gmail.com")

})

app.get("/about", function(req, res){
    res.send("I am a full-Stack Developer")

})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coffee</li><li>Code</li><li>beer</li></ul>")

})

app.listen(3000, function(){
    console.log("server started on port 3000")
});

