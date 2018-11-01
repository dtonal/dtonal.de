var express 	= require("express"),
	app 		= express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';


app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(request, response){
	response.render("index");
});


app.listen(port);