const express = require('express');
const RecipePosts = require('../models/postModel')
const router = express.Router()
const {
    createPost,
    likePost,
    pullPosts,
    getPost,
    deletePost,
    updatePost,
    searchPost
} = require('../controllers/postController')

//GET all posts
router.get('/',  pullPosts) //a certain route 

//GET posts matching search word
//Formate looks like this: /search?searchTerm=udon+ramen, returns results with ramen or udon
router.get('/search', searchPost)


//GET single post
router.get('/:id', getPost)


//POST new post
router.post('/', createPost)

//LIKE a post
router.put('/like', likePost)

//Delete single post
router.delete('/:id', deletePost)

//UPDATE a post
router.patch('/:id', updatePost)

module.exports = router

