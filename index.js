const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser());

app.get("/", function(req, res) {
	res.render('index');
});

app.post("/savedata", function(req, res) {
var fname=req.body.firstname;
var	lname=req.body.lastname;
var email=req.body.emailaddress;
var connect=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'blog'
});
var sql=
"INSERT INTO personalinfo (FirstName,LastName,EmailAddress) VALUES ('"
		+ fname 
		+ "','" 
		+ lname + "','" 
		+ email + "')";

connect.query(sql, function(err, result){
if (err) {
	throw err;
}
console.log('1 record inserted');
res.render('index');
	});
});

app.get("/blog1", function(req, res) {
	res.render('blog1');
});

app.get("/blog2", function(req, res) {
	res.render('blog2');
});

app.get("/blog3", function(req, res) {
	res.render('blog3');
});

app.listen(3000, function() {
	console.log("app is running on port 3000")
});