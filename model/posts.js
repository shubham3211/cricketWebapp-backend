const mongoose = require('mongoose');
const Hot_Post = require('./hotPosts');
const Recent_Post = require('./recentPosts');
const Timeless_Post = require('./timelessPost');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
  id: Number,
  title: String,
  extended_text: String,
  truncated_text: String,
  is_published: Boolean,
  created_on: Date,
  image: String,
  slug: String,
  author: {
    id: Number,
    name: String,
    name_key: String,
    is_admin: Boolean
  },
  tags: [
    {
      id: Number,
      name: String,
      tag_key: String,
      status: Boolean
    }
  ],
  metadata: {
    comments: Number,
    likes: Number,
    meta_description: String,
    page_title: String,
    shares: Number,
    views: Number
  }
})

PostSchema.pre('remove', async function(next) {
  await Recent_Post.remove({post: this._id});
  await Hot_Post.remove({post: this._id});
  await Timeless_Post.remove({post: this._id});
  next();
})

let post = mongoose.model('posts', PostSchema);
 


module.exports = post;