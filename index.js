/**
 * Created by wbison on 04-05-15.
 */
var async = require('async');
var _ = require('underscore');

//module.exports = function(config, cb) {
var cb = null;
    var config = require('./config');
    var credentials = require('./credentials');

    if (credentials.user && credentials.password) {
        var auth =  "Basic " + new Buffer(credentials.user + ":" + credentials.password).toString('base64');
        config.defaultHeaders = {
            'Authorization': auth
        };
    }

    var nano = require('nano')(config);
    var remove = require('./remove')(config);
    config.dbs[0] === "*" ? nano.db.list(process) : process(null, config.dbs);
    function process(err, list) {
        async.map(list, remove, cb);
    };
//};