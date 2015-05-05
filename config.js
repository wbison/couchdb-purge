/**
 * Created by wbison on 04-05-15.
 */
module.exports = {
    url: "http://ec2-54-77-128-152.eu-west-1.compute.amazonaws.com:5984",
    dbs: ["nappkin_1demo"],
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