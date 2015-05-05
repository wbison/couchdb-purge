/**
 * Created by wbison on 04-05-15.
 */

module.exports = function(config) {

    var request = require('./purgerequest')(config);
    var _ = require('underscore');

    return function(db, cb) {
        db.view(config._design_doc._id, '_default', { limit: 10000 }, function(e,b) {
            if (e) { return cb(e); }
            var r = {};
            _(b.rows).each(function(row) {
                r[row.key] =  [row.value];
            });
            request(db, r, function(err,b) {
                if (err) { return cb(err); }
                db.compact(cb);
            });
        });
    }
}