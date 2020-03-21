const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hotPostScheam = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'posts'
  }
})

let hotPosts = mongoose.model('hotPosts', hotPostScheam);
module.exports = hotPosts;