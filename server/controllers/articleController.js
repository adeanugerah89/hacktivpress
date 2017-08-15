'use strict'

var Article = require('../models/articles')

var articleCreate = (req,res) => {
  Article.create({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
    content: req.body.content,
    category: req.body.category,
  },(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

var getAllArticle = (req,res) => {
  Article.find()
  .populate({path: 'author', select: 'username'})
  .exec((err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

var getOneArticle = (req,res) => {
  Article.findById(req.params.id, (err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

var updateArticle = (req,res) => {
  Article.findById(req.params.id,(err,result) => {
    if(err) {
      res.send(err)
    }else {
      if(req.body.cekId == result.author) {
        Article.update(
          {id: result._id},
          {$set: req.body}, (err,result) => {
            if(err) res.send(err)
            res.send('data already updated')
          })
      } else {
        res.send('you not authorized')
      }
    }
  })
}

var deleteArticle = (req,res) => {
  Article.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.send(err)
    res.send('data already deleted')
  })
}

module.exports = {
  articleCreate,
  getAllArticle,
  getOneArticle,
  updateArticle,
  deleteArticle,
};