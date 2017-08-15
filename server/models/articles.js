  var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  summary: String,
  content: String,
  category: String
});

var Article = mongoose.model('article', articleSchema);
module.exports = Article;