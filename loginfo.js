/**
 * Created by wbison on 04-05-15.
 */
/**
 * Created by wbison on 04-05-15.
 */

module.exports = function(config) {

    var nano    = require('nano')(config);

    return function loginfo(db) {
        nano.db.get(db.config.db, function(err, body) {
            if (!err) {
                console.log(body.db_name + ": documents " + body.doc_count + ", disksize " + body.disk_size + ", datasize " + body.data_size);
            }
        });
    }
}