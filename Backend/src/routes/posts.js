const express = require('express');
const RecipePosts = require('../models/postModel')
const router = express.Router()
const {
    createPost,
    pullPosts,
    getPost
} = require('../controllers/postController')

//GET all posts
router.get('/',  pullPosts) //a certain route 

//GET singel post
router.get('/:id', getPost)

//POST new post
router.post('/', createPost)

//Delete singel post
router.delete('/:id', (req,res) =>{
    res.json({mssg: 'DELETE a single workout'})
})

//UPDATE a post
router.patch('/:id', (req,res) =>{
    res.json({mssg: 'UPDATE a single workout'})
})

module.exports = router

