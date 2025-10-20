const express = require('express');
const router = express.Router();
const { getAllPosts, createPost ,getPostById, deletePost} = require('../controllers/postController');

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').get(getPostById).delete(deletePost);

module.exports = router;