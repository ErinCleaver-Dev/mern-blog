const {Router} = require('express');
const router = Router();


const userController = require('./routes/blog')
const authController = require('./routes/auth')


router.use(userController);
router.use(authController);


module.exports = router;