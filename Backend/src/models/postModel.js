const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    user_id: {type:String, required: true},//{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user : {type:String, required: true},
    blogtext : String,
    imageURL: {type:String, required:true},
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
postSchema.index({ user_id : 'text' ,blogtext: 'text', tags: 'text', ingredients: 'text' });

module.exports = mongoose.model('RecipePosts', postSchema)

