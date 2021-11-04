var express = require('express');
var router = express.Router();
var user = require("../controllers/user");

router.get('/', user.read);

module.exports = router;