const {Router} = require('express');
const router = Router();


const userController = require('./routes/blog')

router.use(userController);

module.exports = router;