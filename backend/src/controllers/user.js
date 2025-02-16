const user = require("../models/user");

const getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createUser = async (req, res) => {
    try {
        const User = new user(req.body);
        await User.save();
        res.status(201).json(User);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}