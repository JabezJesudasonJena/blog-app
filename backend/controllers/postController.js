const Post = require("../models/model");

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).sort({ createdAt : -1});
        res.status(200).json(posts);
        console.log("Number of Posts : " + posts.length)
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
        console.log("New Post created ID : " + post.id)
    } catch (err) {
        res.status(500).json({message : "Server Error"})
    }
}

const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post) {
            res.status(200).json(post);
            console.log(post.id)
        } else {
            res.status(404).json({message : "Post not found"})
        }
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }
};

const deletePost = async (req, res ) => {
    const post = await Post.findById(req.params.id);
    try {
        if (post) {
            await post.deleteOne();
            res.json({message : "Post Deleted "})
            console.log("Post : " + post.id + "  Deleted ")
        } else {   
            res.status(404).json({message : "The Post cannot be deleted ! "});
        }
    } catch (error) {
        console.log("There was some error")
    }
}

const updatePost = async (req,res) => {
    try {
        const {title, content} = req.body;
        const post = await Post.findById(req.params.id);

        if (post) {
            post.title = title || post.title;
            post.content = content || post.content;

            const updatePost = await post.save();
            res.json(updatePost);
            console.log("The Post which I have edited : " + updatePost)
        } else {
            res.status(404).json({message : "Post not Found ! "});
        }
    } catch (error) {
        console.log( "Error in 'updatePost'" + error );
    }
}

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    deletePost,
}