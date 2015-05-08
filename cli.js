/**
 * Created by wbison on 08-05-15.
 */
#! /usr/bin/env node

var config = process.argv[2] ? require(process.argv[2]) : {};
var purge = require(__dirname + '/');
    purge(config, function(err, res) {
    if (err) { return console.log(err); }
    console.log(res);
});