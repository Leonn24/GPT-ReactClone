const { default: errorHandler } = require('../middlewares/error');
const userModel = require('../models/user');
const { default: errorResponse } = require('../utils/errorHandler');

exports.sentToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res)
    res.status(statusCode).json({
        success: true,
        token,
    });
};

exports.registerController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        // existing user
        const existingEmail = await userModel.findOne({ email })
        if (existingEmail) {
            return next(new errorHandler('Email is already taken', 500))
        }
        const user = await userModel.create({ username, email, password })
        sendToken(user, 201, res)
    } catch (error) {
        console.log(error)
        next(error)
    }
};

exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            return next(new errorHandler('Please provide email or password!'))
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return next(new errorHandler('Invalid Creditials!', 401));
        }
        const isMatch = await userModel.matchPassword(password);
        if (!isMatch) {
            return next(new errorResponse('Invalid Creditial', 401));
        }
        sendToken(user, 200, res);
    } catch (error) {
        console.log(error)
        next(error)
    }
};
exports.logoutController = async (req, res) => {
    res.clearCookie('refreshToken')
    return res.status(200).json({
        success: true,
        message:'Logout Succesfully',

    })
};