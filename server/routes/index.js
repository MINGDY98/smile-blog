var express = require('express');
var router = express.Router();
var post = require("./post")
var comment = require("./comment")
var user = require("./user")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/post', post);
router.use('/comment', comment);
router.use('/user', user);

module.exports = router;
