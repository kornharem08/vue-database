var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./database');
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// index page
app.get('/', function (req, res) {
res.send('Express is running');
});

app.get('/api/supplier/', db.getAllsuppliers);
app.get('/api/supplier/CountCounty', db.getCountCounty);


var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});