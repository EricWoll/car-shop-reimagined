const { body, validationResult } = require('express-validator');
const accountValidator = {};

/*  **********************************
 *  Registration Data Validation Rules
 * ********************************* */
accountValidator.loginRules = () => {
    return [
        //account email
        body('account_email')
            .trim()
            .escape()
            .notEmpty()
            .isEmail()
            .normalizeEmail() // refer to validator.js docs
            .withMessage('A valid email is required.'),

        // email exists
        body('account_email')
            .trim()
            .isEmail()
            .normalizeEmail() // refer to validator.js docs
            .withMessage('A valid email is required.'),
        // check if email exists!!!

        //password check
        body('account_password')
            .trim()
            .notEmpty()
            .withMessage('No Password Entered.')
            .isLength({ min: 12 })
            .withMessage(
                'There is not at least 12 characters for your password.'
            ),
    ];
};
accountValidator.registationRules = () => {
    return [
        // firstname is required and must be string
        body('account_firstname')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a first name.'), // on error this message is sent.

        // lastname is required and must be string
        body('account_lastname')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 2 })
            .withMessage('Please provide a last name.'), // on error this message is sent.

        // valid email is required and cannot already exist in the DB
        body('account_email')
            .trim()
            .escape()
            .notEmpty()
            .isEmail()
            .normalizeEmail() // refer to validator.js docs
            .withMessage('A valid email is required.'),

        // email exists check
        body('account_email')
            .trim()
            .isEmail()
            .normalizeEmail() // refer to validator.js docs
            .withMessage('A valid email is required.'),
        // check if email exists!!!

        //password check
        body('account_password')
            .trim()
            .notEmpty()
            .withMessage('No Password Entered.')
            .isLength({ min: 12 })
            .withMessage(
                'There is not at least 12 characters for your password.'
            ),
    ];
};

/* ******************************
 * Check data and return errors or continue to registration
 * ***************************** */
accountValidator.checkRegData = async (req, res, next) => {
    let errors = [];
    errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.redirect('/account/register');
        return;
    }
    next();
};

/* ****************************************
 *  Check Login
 * ************************************ */
accountValidator.loginCheck = (req, res, next) => {
    if (res.locals.loggedin) {
        next();
    } else {
        req.flash('notice', 'Please log in.');
        return res.redirect('/account/login');
    }
};

module.exports = accountValidator;
