var express = require('express');
var router = express.Router();
var post = require("../controllers/post");

router.post('/write', post.writePost);
router.get('/read', post.readAll);
router.get('/read/:id',post.readPost);
router.put('/update', post.updatePost);
router.delete('/delete/:id',post.deletePost);
module.exports = router;