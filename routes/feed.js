const express=require('express');
const {body}=require('express-validator');

const feedcontroller =require('../controllers/feed');
const router=expres.Router();

//Get/feed/posts
router.get('/posts',feedcontroller.getposts);
//post/feed/post
router.post('/post',[
body('title').trim().islength({min:5}),
body('content').trim().islength({min:5}),
],feedcontroller.createpost);
module.export=router;