const express = require('express');
//const userPosts = require('../models/userModel')
const router = express.Router()
const {
    createUser,
    pullUsers,
    getUser,
    loginUser,
    signupUser,
    deleteUser
} = require('../controllers/userController')

//login
router.post('/login', loginUser)

router.post('/signup', signupUser)

//GET all posts
router.get('/',  pullUsers) //a certain route 

//GET singel post
router.get('/:id', getUser)

//Delete single user
router.delete('/:id', deleteUser)


//POST new post
router.post('/', createUser)



module.exports = router

