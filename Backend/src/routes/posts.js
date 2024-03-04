const express = require('express');

const router = express.Router()

//GET all posts
router.get('/', (req, res) => {
    res.json({mssg: 'get mongo db stuff'})
}) //a certain route 

//GET singel post
router.get('/:id', (req,res) =>{
    res.json({mssg: 'GET a single workout'})
})

//POST new post
router.post('/', (req,res) =>{
    res.json({mssg: 'POST a single workout'})
})

//Delete singel post
router.delete('/:id', (req,res) =>{
    res.json({mssg: 'DELETE a single workout'})
})

//UPDATE a post
router.patch('/:id', (req,res) =>{
    res.json({mssg: 'UPDATE a single workout'})
})

module.exports = router

