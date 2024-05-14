console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require('http');

//1: Kirish code: expressga kirib kelayotgan malumotlarga bog'liq kod yoziladi
app.use(express.static("public")); // har qand browserdan kirib kelgan zaproslar uchun public folder ochiq degan manoni bildiradi
app.use(express.json()); // kirib kelayotgan json formatdagi datani object formatga o'tkazib beradi
app.use(express.urlencoded({extended: true})); // htmldan formdan yuborilgan datani olishda ishlatiladi


//2 Session

//3 Views code
app.set("views", "views"); // views ichida html backendni yasaymiz
app.set('view engine', 'ejs');

//4 Routing code
app.get("/", function(req, res) {
    res.end(`<h1 style="background: red">HELLO WORLD by Habibullo</h1>`);
});

app.get("/", function(req, res) {
    res.end(`<h1>Siz sovg'alar sahifasidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
});