const {check} = require('express-validator')

module.exports  = {
    userSingupValidator: [
        check('name')
            .not()
            .isEmpty()
            .withMessage('Name is Required'),
        check('email')
            .isEmail()
            .withMessage('Must be a validd email address'),
        check('password')
            .isLength({min: 8, max: 24})
            .withMessage('Password must be at least 8 characters and no more')
    ]
}