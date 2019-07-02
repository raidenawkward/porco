var express = require('express');
var router = express.Router();

var goodrequire = require('../good/good.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'porco'});
});

router.post('/goodadd',function(req, res, next){
    goodrequire.add(req, res, next);
});

router.get('/gooddel',function(req, res, next){
    goodrequire.delete(req, res, next);
});

router.get('/goodupdate',function(req, res, next){
    goodrequire.update(req, res, next);
});

router.get('/goodlist',function(req, res, next){
    goodrequire.list(req, res, next);
});

router.get('/goodretrievebyid',function(req, res, next){
    goodrequire.retrieve(req, res, next);
});

module.exports = router;
