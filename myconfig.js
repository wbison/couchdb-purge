/**
 * Created by wbison on 04-05-15.
 */
module.exports = {
    url: "http://localhost",
    dbs: ["*li"],
    _design_doc: {
        _id: "purge",
        language: "javascript",
        views: {
            _default: {
                map: ""
            }
        }
    }
};