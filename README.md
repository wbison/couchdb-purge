# CouchDB purge documents

Script to purge documents that are part of a user-defined view.
The script is based on https://github.com/twilson63/couchdb-expired with the following differences:
- documents are purged (hard delete) instead of softdeleted
- you can include `user` and `password` lines in your config for Basic authentication
- the map function is defined in map.js to avoid having to define it as a string