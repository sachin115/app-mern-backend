const express = require('express');
const { signup, signin } = require('../controllers/auth');
const { validateSignupResult,validateSigninResult, isRequestvalidated } = require('../validatores/auth');
const router = express.Router();


router.post('/signin',validateSigninResult, isRequestvalidated, signin)
router.post('/signup',validateSignupResult, isRequestvalidated, signup)

// router.post('/profile', requireSignin,(req,res) => {
//     res.status(200).json({
//         user: 'profile'
//     })
// })

module.exports = router;