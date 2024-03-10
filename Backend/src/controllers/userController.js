const userPosts = require('../models/userModel')
const mongoose = require('mongoose')

//Get all users
const pullUsers = async (req,res) =>{
    const user_posts = await userPosts.find({}).sort({createdAt: -1})
    try{
        res.status(200).json(user_posts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Get one user
const getUser = async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User ID Is Invalid"})
    }
    const user_post = await userPosts.findById(id)
    if(!user_post){
        return res.status(404).json({error: "User not Found"})
    }

    res.status(200).json(user_post)
}

//create a user
const createUser = async (req,res) =>{
    const {username, email, password} = req.body

    //add post to databse
    try{
        const user_post = await userPosts.create({username, email, password})
        res.status(200).json(recipe_post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    pullUsers,
    getUser,
    createUser,
}