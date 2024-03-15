const express = require('express');
const RecipePosts = require('../models/postModel')
const router = express.Router()

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY,
  region: process.env.REGION
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.BUCKET_NAME,
      key: function (req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname);
      }
    }),
    fileFilter: function(req, file, cb) {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true);
      } else {
        cb(new Error('Invalid, only JPEG, PNG, and GIF are allowed'), false);
      }
    }
  });




const {
    createPost,
    likePost,
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


//GET single post
router.get('/:id', getPost)


//POST new post
router.post('/', upload.single('file'), reqJwt, createPost);

//NUKE the databse, remove this after
router.delete('/nuke', nukePosts)

//LIKE a post
router.put('/like', likePost)

//Delete single post
router.delete('/:id',  deletePost)



//UPDATE a post
router.patch('/:id', reqJwt, updatePost)

module.exports = router

