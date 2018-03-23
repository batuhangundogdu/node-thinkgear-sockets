var thinkgear = require('../lib');
var request = require('request');
var fs = require('fs');
var express = require('express');
var app = express();
var ary = [];
var client = thinkgear.createClient();
var x;
client.on('data', function(data) {

    if (data.poorSignalLevel === 0) {
        x = data;
        console.log(data);

        app.get('/', function(req, res) {
            res.send(x);
        });
    } else {
        console.log("Poor Signal");
    }
});

app.listen(3000);
client.connect();