var express = require('express');
var router = express.Router();

var goodrequire = require('./good.js');


router.post('/goodadd',function(req, res, next) {
    goodrequire.add(req, res, next);
});

router.post('/gooddel',function(req, res, next) {
    goodrequire.delete(req, res, next);
});

router.post('/goodupdate',function(req, res, next) {
    goodrequire.update(req, res, next);
});

router.get('/goodlist',function(req, res, next) {
    goodrequire.list(req, res, next);
});

router.get('/query',function(req, res, next) {
    goodrequire.retrieve(req, res, next);
});

module.exports = router;
