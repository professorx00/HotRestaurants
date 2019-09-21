const express = require("express");
const path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let customers = [
    {
        customerName: "Johnny Five",
        email: "number5@shortcircut.com",
        phone: "603-554-6798",
        customerID: 1
    }];
app.use(express.static('public'))

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(path.join(__dirname, "/public/reserve.html")))
})

app.get('/tables', function (req, res) {
    res.sendFile(path.join(path.join(__dirname, "/public/tables.html")))
})

app.post('/addCustomer',function(req,res){
    customers.add(req.body)
})

app.get('/getTables',function(req,res){
    
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});