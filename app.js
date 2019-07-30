const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//root route
app.get("/", function(req, res) {
  //res.send("it works!");
  res.render("index.html");
});

app.get("/mercury", function(req, res){
  res.render("mercury.html");
});

app.get("/venus", function(req, res){
  res.render("venus.html");
});

//server listener
app.listen("8081", "0.0.0.0", function(){
  console.log("Express Server is Running...");
});

// app.listen(process.env.PORT, process.env.IP, function() {
//   console.log("Running Express Server...");
// });
