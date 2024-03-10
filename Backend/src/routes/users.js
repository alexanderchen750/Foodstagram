const express = require('express');
//const userPosts = require('../models/userModel')
const router = express.Router()
const {
    createUser,
    pullUsers,
    getUser
} = require('../controllers/userController')

//GET all posts
router.get('/',  pullUsers) //a certain route 

//GET singel post
router.get('/:id', getUser)


//POST new post
router.post('/', createUser)


module.exports = router

