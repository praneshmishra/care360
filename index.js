const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");
var fs= require("fs");

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/json', express.static(__dirname + '/public/json'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.post("/add-tasks", function(req, res) {
  filePath = __dirname + '/public/json/medication.json';
    fs.writeFile(filePath, JSON.stringify(req.body, null, '\t'), function (err) {
        console.log(err);
    });
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');