const {Router} = require('express');
const { signup } =require('../controllers/auth')
const router = Router();

// validators for signup
const {runValidation} = require('../validators');
const {userSingupValidator} =require('../validators/auth');

router.post('/signup',userSingupValidator , runValidation, signup);

module.exports = router;