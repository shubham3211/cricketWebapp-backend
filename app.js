let express = require('express');
const app = express();
const Post = require('./model/posts');
const RecentPosts = require('./model/recentPosts');
const HotPosts = require('./model/hotPosts');
const TimelessPosts = require('./model/timelessPost');
const Fact = require('./model/fact');
const mongoose = require('mongoose');
let port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  next();
})

mongoose.connect('mongodb://shubham:shubham123@ds018168.mlab.com:18168/nn-outh-test')
  .then(() => {
    appListen();
  })
  .catch((err) => {
    throw new Error(err);
  })

let appListen = () => {
  app.listen(port, () => console.log('Listening on port 5000'));
}

app.get('/recent-post', async (req, res) => {
  try{
    let recentPosts = await RecentPosts.find({}).populate('post');
    res.send({
      status: true,
      data: recentPosts
    })
  }catch(err) {
    res.send({
      status: false,
      err
    })
  }
})

app.get('/timeless-post', async (req, res) => {
  try{
    let timelessPost = await TimelessPosts.find({}).populate("post");
    res.send({
      status: true,
      data: timelessPost
    })
  }catch(err) {
    res.send({
      status: false,
      err
    })
  }
})

app.get('/hot-post', async (req, res) => {
  try{
    let hotPost = await HotPosts.find({}).populate('post');
    res.send({
      status: true,
      data: hotPost
    })
  }catch(err){
    res.send({
      status: false,
      err
    })
  }
})

app.get('/fact', async (req, res) => {
  try{
    let fact = await Fact.find({});
    res.send({
      status: true,
      data: fact
    })
  }catch(err){
    res.send({
      status: false,
      err
    })
  }
})