const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: { type: String, required: true },
    body: String,
    author: { type: String, required: true /*type: mongoose.Schema.Types.ObjectId, ref: 'User' */}
    /*createdAt: { type: Date, default: Date.now },
    tags: [String],
    ingredients: [String],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
        text: String,
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now }
    }]*/
}, {timestamps: true})

module.exports = mongoose.model('RecipePosts', postSchema)

