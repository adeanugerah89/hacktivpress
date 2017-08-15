'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/userController')

/* GET users listing. */
router.post('/', controller.userCreate);
router.get('/', controller.getAllUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
