const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecentPostsSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'posts'
  }
})

const recentPosts = mongoose.model('recentPost', RecentPostsSchema);
module.exports = recentPosts;