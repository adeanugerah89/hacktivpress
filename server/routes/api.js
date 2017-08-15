var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

router.post('/signup', controller.userCreate);
router.post('/signin', controller.signIn);

module.exports = router;
