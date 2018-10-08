let express=require("express");
let app=express();

app.use(express.static("assets"));
app.set("view engine", "ejs");

app.get("/", function(request, response){
  response.render("index.ejs");
});

app.listen(3000, function(){
  console.log("Now listening on port 3000");
});