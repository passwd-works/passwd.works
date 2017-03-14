var bs = require('browser-sync').create();
var serveIndex = require('serve-index');
var fs = require('fs');
var path = require('path');

bs.init({
    server: '/mnt/project/',
    port: '3000',
    ui: false,
    files: '/mnt/project/**'
}, function (err, bs) {
    bs.addMiddleware('', serveIndex('/mnt/project/'));
});
