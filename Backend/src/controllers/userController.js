const userPosts = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createToken = (_id) => {
    return jwt.sign({_id}, SECRET, {expiresIn: '2d'})
}

//login user
const loginUser = async (req, res) => {
    const {username, password} = req.body
    try{
        const user = await userPosts.login(username, password)

        const token = createToken(user._id)
        res.status(200).json({username, token})
    } catch (error){
        res.status(400).json({error: error.message})

    }
}

//logout user
const signupUser = async (req, res) => {
    const {username, email, password} = req.body

    try{
        const user = await userPosts.signup(username, email, password)

        const token = createToken(user._id)
        res.status(200).json({username, token})
    } catch (error){
        res.status(400).json({error: error.message})

    }

}

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

const deleteUser = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User ID Is Invalid"})
    }
    const user_post = await userPosts.findOneAndDelete({_id: id})
    if(!user_post){
        return res.status(404).json({error: "User not Found"})
    }
    res.status(200).json(user_post)
}





module.exports = {
    pullUsers,
    getUser,
    createUser,
    signupUser,
    loginUser,
    deleteUser
}