/**
 * Created by wbison on 04-05-15.
 */
module.exports = {
    url: "http://localhost",
    dbs: ["*"],
    testrun: false,
    silent: false,
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