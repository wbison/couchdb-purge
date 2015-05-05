/**
 * Created by wbison on 04-05-15.
 */
/**
 * Created by wbison on 04-05-15.
 */

module.exports = function(config) {

    var nano    = require('nano')(config);

    return function purgerequest(db, purgedoc, callback) {
        nano.request({
            db: db.config.db,
            method: 'post',
            doc: "_purge",
            body: purgedoc
        }, callback);
    }
}