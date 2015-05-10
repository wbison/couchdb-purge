module.exports = function(config) {

    //  this is the function that defines which documents
    //  are purged.
    //  it will be included in the design document under the 'map' key
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