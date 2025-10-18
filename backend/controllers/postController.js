const Post = require("../models/model");

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).sort({ createdAt : -1});
        res.status(200).json(posts);
    } catch (error) {   
        res.status(500).json({message : "Server Error"});
    }
}

const createPost = async (req, res) => {
    try {
        const {title, content } = req.body;
    

        if (!title || !content) {
            return res.status(400).json({message : "Please add a title and content"})
        }
        const post = await Post.create({
            title,
            content,
        });
        res.status(201).json(post);
        //console.log(post)
    } catch (err) {
        res.status(500).json({message : "Server Error"})
    }
}

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message : "Post not found"})
        }
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
};

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
}