const express = require("express");
const path = require("path");

var app = express();
var PORT = 4040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let customers = [
    {
        customerName: "Johnny Five",
        email: "number5@shortcircut.com",
        phone: "603-554-6798",
        customerID: 5
    }];
app.use(express.static('public'));

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(path.join(__dirname, "/public/reserve.html")))
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(path.join(__dirname, "/public/tables.html")))
});

app.post('/addCustomer',function(req,res){
    customers.push(req.body)
    console.log("added")
    console.log(req.body)
});

app.get('/getTables',function(req,res){
    let tables = [];
    if(customers.length>0){
        for(let x=0;x<5;x++){
            if(customers[x]){
               tables.push(customers[x]) 
            }
        }
    }
    else{
        tables.push("No Customer")
    }
    res.json({"results":tables})
});

app.get('/getWaitList',function(req,res){
    let tables = [];
    if(customers.length>5){
        for(let x=5;x<customers.length;x++){
            if(customers[x]){
               tables.push(customers[x]) 
            }
        }
    }
    else{
        tables.push("No Customer")
    }
    res.json({"results":tables})
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});