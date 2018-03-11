var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: '<h3>Express<h3>' });
  });
  
};
