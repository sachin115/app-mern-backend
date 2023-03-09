const express = require('express');
const { requireSignin } = require('../../commonmidleware');
const { signup, signin, signout} = require('../../controllers/admin/auth');
const { validateSignupResult,validateSigninResult, isRequestvalidated } = require('../../validatores/auth');
const router = express.Router();


router.post('/admin/signin', validateSigninResult,isRequestvalidated, signin)
router.post('/admin/signup', validateSignupResult,isRequestvalidated, signup)
router.post('/admin/signout', signout)


module.exports = router;