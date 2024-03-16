const userPosts = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createToken = (_id) => {
    return jwt.sign({_id}, SECRET, {expiresIn: '2d'})
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await userPosts.login(email, password)

        const token = createToken(user._id)
        res.status(200).json({email, token})
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

const userToId = async (req,res) => {
    const { username } = req.params
 
    try {
        const response = await userPosts.findOne({ username: username }); // Find user by username
        if (!response) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ userId: response._id });
    } catch (error) {

        console.error("Fetching user ID failed:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//Get one user
const getID = async (req, res) => {
    const userId = req.user._id;
    if (!userId) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ userId });
};

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

const nukeUsers = async (req,res) => {
    const deleteResult = await userPosts.deleteMany({});

    // Check the result of the delete operation
    if (deleteResult.deletedCount === 0) {
        return res.status(404).json({error: "No posts found to delete"});
    }

    // If posts were found and deleted, return a success response
    res.status(200).json({message: `${deleteResult.deletedCount} posts were deleted successfully`});

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
    deleteUser,
    nukeUsers,
    getID,
    userToId
}