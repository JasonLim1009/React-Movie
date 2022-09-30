const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '');
});

app.listen(3000, function() {
    console.log('server is running on port 3000');
})