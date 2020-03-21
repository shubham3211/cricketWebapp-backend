const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timelessPostScheama = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'posts'
  }
})

let timelessPost = mongoose.model('timelessPost', timelessPostScheama);

module.exports = timelessPost;