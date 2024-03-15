const RecipePosts = require('../models/postModel')
const userPosts = require('../models/userModel') // just users
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
        return res.status(404).json({error: "Post ID Is Invalid"})
    }
    const recipe_post = await RecipePosts.findById(id)
    if(!recipe_post){
        return res.status(404).json({error: "Post not Found"})
    }

    res.status(200).json(recipe_post)
}

//Search for a post, requires query parameter
const searchPost = async (req, res) => {
    const { searchTerm } = req.query; 

    if (!searchTerm) {
        return res.status(400).json({ error: "Search term is required" });
    }

    try {
        const searchResults = await RecipePosts.find({
            $text: { $search: searchTerm }
        }).sort({ createdAt: -1 });

        res.status(200).json(searchResults);
    } catch (error) {
        res.status(400).json({ error: "Search Error"});
    }
}


//create a post
const createPost = async (req,res) =>{
    console.log("ENTERED")
    const user_id = req.user._id
    
    const { blogtext, tags} = req.body
    const user_post = await userPosts.findById(user_id)
    user = user_post.username

    if(!user){
        return res.status(404).json({error: "User not Found"})
    }

    if (!req.file || !req.file.location) {
        return res.status(400).send('File upload failed or no file was uploaded.');
    }
    const imageURL = req.file.location;


    //add post to databse
    try{
        const recipe_post = await RecipePosts.create({user, user_id, blogtext, imageURL, tags})
        res.status(200).json(recipe_post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//like a post
const likePost = async (req,res) =>{
    const {user, likes} = req.body

    try{
        const recipe_post = await RecipePosts.create({user, blogtext, tags})
        res.status(200).json(recipe_post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete post
const deletePost = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Post ID Is Invalid"})
    }
    const recipe_post = await RecipePosts.findOneAndDelete({_id: id})
    if(!recipe_post){
        return res.status(404).json({error: "Post not Found"})
    }
    res.status(200).json(recipe_post)
}

//update post
const updatePost = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Post ID Is Invalid"})
    }
    const recipe_post = await RecipePosts.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!recipe_post){
        return res.status(404).json({error: "Post not Found"})
    }
    res.status(200).json(recipe_post)
}

const nukePosts = async (req,res) => {
    const deleteResult = await RecipePosts.deleteMany({});

    // Check the result of the delete operation
    if (deleteResult.deletedCount === 0) {
        return res.status(404).json({error: "No posts found to delete"});
    }

    // If posts were found and deleted, return a success response
    res.status(200).json({message: `${deleteResult.deletedCount} posts were deleted successfully`});

}
const unlikePost = async (req, res) => {
    const { id } = req.params; 
    const userId = req.user._id; 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post ID is invalid" });
    }

    try {
      const unlikedPost = await RecipePosts.findOneAndUpdate(
            { _id: id },
            { $pull: { likes: userId } },
            { new: true } 
        );
        if (!unlikedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json(unlikedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the post" });
    }
};

const likePost = async (req, res) => {
    const { id } = req.params; 
    const userId = req.user._id; 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post ID is invalid" });
    }

    try {
      const likedPost = await RecipePosts.findOneAndUpdate(
            { _id: id },
            { $addToSet: { likes: userId } },
            { new: true } 
        );
        if (!likedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json(likedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the post" });
    }
};


module.exports = {
    pullPosts,
    getPost,
    createPost,
    likePost,
    deletePost,
    updatePost,
    searchPost,
    nukePosts,
    likePost,
    unlikePost
} 