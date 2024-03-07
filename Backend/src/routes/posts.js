const express = require('express');
const RecipePosts = require('../models/postModel')
const router = express.Router()
const {
    createPost,
    pullPosts,
    getPost,
    deletePost,
    updatePost
} = require('../controllers/postController')

//GET all posts
router.get('/',  pullPosts) //a certain route 

//GET singel post
router.get('/:id', getPost)

//POST new post
router.post('/', createPost)

//Delete singel post
router.delete('/:id', deletePost)

//UPDATE a post
router.patch('/:id', updatePost)

module.exports = router

