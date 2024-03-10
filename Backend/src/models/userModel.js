const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: String,
    favoritedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    directMessages: [{
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      message: String,
      createdAt: { type: Date, default: Date.now }
    }]
  });
  
  //const User = mongoose.model('User', userSchema);

  module.exports = mongoose.model('userPosts', userSchema)