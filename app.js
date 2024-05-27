console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
	if (err) {
		console.log("ERROR:", err);
	} else {
		user = JSON.parse(data);
	}
});

// MongoDB call
const db = require("./server").db();

//1: Kirish code: expressga kirib kelayotgan malumotlarga bog'liq kod yoziladi
app.use(express.static("public")); // har qand browserdan kirib kelgan zaproslar uchun public folder ochiq degan manoni bildiradi
app.use(express.json()); // kirib kelayotgan json formatdagi datani object formatga o'tkazib beradi
app.use(express.urlencoded({extended: true})); // htmldan formdan yuborilgan datani olishda ishlatiladi


//2 Session

//3 Views code
app.set("views", "views"); // views ichida html backendni yasaymiz
app.set('view engine', 'ejs');

//4 Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
	const newReja = req.body.reja;
    db.collection("plans").insertOne({reja: newReja}, (err, data) => {
		console.log(data.ops);
		res.json(data.ops[0]);
	});
});

app.post("/delete-item", (req, res) => {
	const id = req.body.id;
	db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, 
	function(err, data) {
		res.json({state: "success"});
	}
);
});

app.get("/author", (req, res) => {
	res.render("author", { user: user });
});

app.post ("/edit-item", (req, res) => {
	const data = req.body;
	console.log(data);
	db.collection("plans").findOneAndUpdate(
		{_id: new mongodb.ObjectId(data.id)}, 
		{$set: {reja: data.new_input}},
		function (err, data) {
			res.json({state: "success"});
		}
	);
})

app.post("/delete-all", (req, res) => {
	if(req.body.delete_all) {
		db.collection("plans").deleteMany(function() {
			res.json({state: "hamma rejalar o'chirildi"});
		});
	}
})

app.get("/", function (req, res) {
	console.log("user entered /");
	db.collection("plans")
	  .find()
	  .toArray((err, data) => {
		if (err) {
		  console.log(err);
		  res.end("something went wrong");
		} else {
			//console.log(data);
		  	res.render("reja", { items: data });
		}
	  });
  });

module.exports = app;