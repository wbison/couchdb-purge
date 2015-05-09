#! /usr/bin/env node

var config = process.argv[2] ? require(process.argv[2]) : {};
var couchpurge = require(__dirname + '/');
    couchpurge(config, function(err, res) {
    if (err) { return console.log(err); }
    console.log(res);
});