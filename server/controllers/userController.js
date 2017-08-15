'use strict'

var User = require('../models/user')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

var userCreate = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password,salt)
  User.create({
    username: req.body.username,
    password: hash
  },(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

var getAllUser = (req,res) => {
  User.find({},(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

var updateUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password,salt)
  User.findById(req.params.id,(err,result) => {
    if(err) res.send(err)
    result.username = req.body.username || result.username;
    result.password = hash;
    
    result.save((err,result) => {
      if(err) res.send(err)
      res.send('data already updated')
    })
  })
}

var deleteUser = (req,res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if(err) res.send(err)
    res.send('data already deleted')
  })
}

var signIn = (req,res) => {
  User.findOne({username: req.body.username})
  .then(data => {
    if (bcrypt.compareSync(req.body.password, data.password)) {
      var token = jwt.sign({username: data.username, id: data._id},'secretkey')
      res.send({
        msg: 'login berhasil',
        token: token,
        userId: data._id,
        username: data.username
      })
    } else {
      res.send('invalid username or password')
    }
  })
}


module.exports = {
  userCreate,
  getAllUser,
  updateUser,
  deleteUser,
  signIn
};