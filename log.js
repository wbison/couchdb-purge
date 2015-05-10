/**
 * Created by wbison on 04-05-15.
 */
/**
 * Created by wbison on 04-05-15.
 */

module.exports = function(config) {

    return function log(db, text) {
        if (!config.silent) {
            console.log(db.config.db + ": " + text);
        }
    }
}