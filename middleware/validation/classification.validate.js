const { body, validationResult } = require('express-validator');
classifyValidate = {};

/*  **********************************
 *  Registration Data Validation Rules
 * ********************************* */
classifyValidate.registationRules = () => {
    return [
        // firstname is required and must be string
        body('classification_name')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a Classification.'),
        // Check if classification exists
    ];
};

/* ******************************
 * Check data and return errors or continue to classification_name
 * ***************************** */
classifyValidate.checkRegData = async (req, res, next) => {
    let errors = [];
    errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.redirect('inv/classification');
        return;
    }
    next();
};

module.exports = classifyValidate;
