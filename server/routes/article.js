'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/articleController')
const auth = require('../helpers/helper');

/* GET users listing. */
router.post('/', controller.articleCreate);
router.get('/:id', controller.getOneArticle);
router.get('/', controller.getAllArticle);
router.put('/:id',auth.articleAuth ,controller.updateArticle);
router.delete('/:id', auth.articleAuth ,controller.deleteArticle);

module.exports = router;
