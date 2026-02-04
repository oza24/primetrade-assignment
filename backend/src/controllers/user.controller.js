const user = require('../models/User');

exports.getProfile = async (req, res) => {
    const user = await user.findById(req.user.userId).select('-password');

    res.status(200).json(user);
};

exports.updateProfile = async (req, res) => {
    
    const user = await user.findByIdAndUpdate(
        req.user.userId,
        req.body,
        { new: true }
    ).select('-password');

    res.status(200).json(user);
};

