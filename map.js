/**
 * Created by wbison on 04-05-15.
 */
/**
 * Created by wbison on 04-05-15.
 */

module.exports = function(config) {

    return function(doc) {

        if (!doc || !doc.doctype || !doc.createdOn || !doc.id) {
            return;
        }

        if (doc.doctype === "order") {

            var createdOn = new Date(doc.createdOn.substring(0,19)+"Z");
            if (!createdOn) return;

            var today = new Date();
            var timeDiff = today.getTime() - createdOn.getTime();
            var ageInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            if (ageInDays >= 3 && doc.id > 0) {
                emit(doc._id, doc._rev);
            }
        }
    }
}