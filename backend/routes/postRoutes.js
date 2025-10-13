const express = require('express');
const router = express.Router();
const { getAllposts, createPost } = require('../controllers/postController');

router.route('/').get(getAllposts).post(createPost);

module.exports = router;