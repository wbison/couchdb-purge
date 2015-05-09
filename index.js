/**
 * Created by wbison on 04-05-15.
 */
var async = require('async');
var _ = require('underscore');

module.exports = function(config, cb) {
    var cb = null;
    var _default = require('./default');
    config = _.extend(_default, config);

    if (config.user && config.password) {
        var auth =  "Basic " + new Buffer(config.user + ":" + config.password).toString('base64');
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
};