const express = require('express');
const RecipePosts = require('../models/postModel')
const router = express.Router()
const {
    createPost,
    pullPosts,
    getPost,
    deletePost,
    updatePost,
    searchPost,
    nukePosts
} = require('../controllers/postController')

//Require token to do
const reqJwt = require('../middleware/requireJWT')

//GET all posts
router.get('/',  pullPosts) //a certain route 

//GET posts matching search word
//Formate looks like this: /search?searchTerm=udon+ramen, returns results with ramen or udon
router.get('/search', searchPost)


//GET singel post
router.get('/:id', getPost)


//POST new post
router.post('/', reqJwt, createPost)

//NUKE the databse, remove this after
router.delete('/nuke', nukePosts)

//Delete single post
router.delete('/:id',  deletePost)



//UPDATE a post
router.patch('/:id', reqJwt, updatePost)

module.exports = router

