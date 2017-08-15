var jwt = require('jsonwebtoken');
require('dotenv').config();

let articleAuth = (req,res,next) => {
  let userCek = jwt.verify(req.headers.token, 'secretkey')
  if(userCek != null){
    req.body.cekId = userCek.id
    next()
  }
}

module.exports = {
  articleAuth
};