var express = require('express');
var router = express.Router();
var comment = require("../controllers/comment");

router.post('/write', comment.write);
router.delete('/delete/:id', comment.deleteComment);

module.exports = router;