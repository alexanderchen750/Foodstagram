const express = require('express');
//const userPosts = require('../models/userModel')
const router = express.Router()
const reqJwt = require('../middleware/requireJWT')
const {
    createUser,
    pullUsers,
    getUser,
    loginUser,
    signupUser,
    deleteUser,
    nukeUsers,
    getID
} = require('../controllers/userController')

//login
router.post('/login', loginUser)

router.post('/signup', signupUser)

//Get user object id
router.get('/userID', reqJwt, getID)

//GET all posts
router.get('/',  pullUsers) //a certain route 

//GET singel post
router.get('/:id', getUser)

//Nuke Users for Dev Purposes
router.delete('/nuke', nukeUsers)

//Delete single user
router.delete('/:id', deleteUser)

//POST new post
router.post('/', createUser)



module.exports = router

