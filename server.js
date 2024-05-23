const http = require('http');
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://hhamidov:Lbzt2r6sFLG0jlEl@cluster0.e3tupve.mongodb.net/"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function(){
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
});

