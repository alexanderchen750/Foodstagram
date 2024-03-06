const RecipePosts = require('../models/postModel')
const mongoose = require('mongoose')
//Get all posts
const pullPosts = async (req,res) =>{
    const recipe_posts = await RecipePosts.find({}).sort({createdAt: -1})
    try{
        res.status(200).json(recipe_posts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Get one post
const getPost = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }
    const recipe_post = await RecipePosts.findById(id)
    if(!recipe_post){
        return res.status(404).json({error: "No such Workout"})
    }

    res.status(200).json(recipe_post)
}

//create a post
const createPost = async (req,res) =>{
    const {title, body, author} = req.body

    //add post to databse
    try{
        const recipe_post = await RecipePosts.create({title, body, author})
        res.status(200).json(recipe_post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    pullPosts,
    getPost,
    createPost
} 