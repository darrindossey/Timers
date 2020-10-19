var path = require('path');
var express = require('express');
var app = express();
var dbinit = require('./app_modules/db_init');
var test = require("./app_modules/test");

var port = 3000;

app.use(express.static('public'));

var data = {
    "test1": "data here",
    "test2": {
        "test3": "more data",
        "test4": {
            "test5": "even more data"
        }
    }
}


app.get('/', (req, res) => {
    console.log('Request Captured');
    res.sendFile(path.join(__dirname, '/index.html'));
    var key = "test3";
    test.getJsonKeyValue(data, "test3", (value) => {
        console.log(`found: key with value = ${value}`);
    });
    test.getJsonKeyValue(null, "test3", (value) => {
        console.log(`found: key with value = ${value}`);
    });
    test.getJsonKeyValue(null, null, (value) => {
        console.log(`found: key with value = ${value}`);
    });



    //res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Express started on port ${port}`);
});