const { check, validationResult } = require('express-validator');

exports.validateSignupResult = [
    check('firstName')
    .notEmpty()
    .withMessage('first name is required'),
    check('lastName')
    .notEmpty()
    .withMessage('last name is required'),
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min:0})
    .withMessage('password must be 8 charecters')
]

exports.validateSigninResult = [
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min:8})
    .withMessage('password must be 8 charecters')
]

exports.isRequestvalidated = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0) {
        return res.status(400).json({message:errors.array()[0].msg})
    }
    next()
}