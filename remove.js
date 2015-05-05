/**
 * Created by wbison on 04-05-15.
 */
// remove docs that are expired
module.exports = function(config) {
    var purge   = require('./purge')(config);
    var map     = require('./map')(config);
    var nano    = require('nano')(config);

    return function(databaseName, cb) {

        var db = nano.use(databaseName);
        // call purge and then call done
        purge(db, done);

        function done(e, res) {
            // if err and it is view not found (404) the create view
            if (e && e.statusCode === 404) {
                // create view and rerun
                config._design_doc.views._default = {
                    map: map.toString()
                };
                db.insert(config._design_doc, "_design/" + config._design_doc._id,
                    function(err) {
                        if (err) { return cb(err); }
                        purge(db, done);
                    });
                return;
            } else if(e) {
                // need to report err
                return cb(e);
            }
            cb(null, res);
        }

    }
}