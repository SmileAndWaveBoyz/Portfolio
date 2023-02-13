const express = require ("express");
const bodyParser = require("body-parser");
const app = express();
 	
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));//This allows the css because it's in the public folder

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
