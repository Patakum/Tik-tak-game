const Post = require("../models/post");

exports.createPost = async (req, res) => {
    const { user } = req.body
    try {
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const post = new Post(req.body);
        await post.save();
        res.status(201).json({
            success: true, data: post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
exports.getAllPosts = async (req, res) => {
    try {
        const post = await Post.find();
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        res.status(200).json({
            success: true, data: post
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findOne(id);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        res.status(200).json({
            success: true, data: post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        res.status(200).json(
            {
                success: true,
                data: post
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }
        res.status(200).json(
            {
                success: true,
                data: post
            }
        );
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}