const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    user: {type:String},//{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    blogtext: String,
    postImage: String,
    timestamp: { type: Date, default: Date.now },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
    text: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
    }],
    tags: [String],
    ingredients: [String]
}, {timestamps: true})




//For the Search
postSchema.index({ blogtext: 'text', tags: 'text', ingredients: 'text' });

module.exports = mongoose.model('RecipePosts', postSchema)

