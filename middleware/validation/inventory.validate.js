const { body, validationResult } = require('express-validator');
invValidate = {};

/*  **********************************
 *  Registration Data Validation Rules
 * ********************************* */
invValidate.registationRules = () => {
    return [
        // classification
        body('classification_id')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .isNumeric()
            .withMessage('Please provide a Vehicle Classification.'), // on error this message is sent.
        //make
        body('inv_make')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a Vehicle Make.'), // on error this message is sent.
        // model
        body('inv_model')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a Vehicle Model.'), // on error this message is sent.
        //description
        body('inv_description')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a Vehicle Description.'), // on error this message is sent.
        // image path
        body('inv_image')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a Vehicle Image.'), // on error this message is sent.
        // thumbnail path
        body('inv_thumbnail')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a Vehicle Thumbnail.'), // on error this message is sent.
        // price
        body('inv_thumbnail')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .isNumeric()
            .withMessage('Please provide a Vehicle Thumbnail.'), // on error this message is sent.
        // year
        body('inv_year')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .isNumeric()
            .withMessage('Please provide a Vehicle Year.'), // on error this message is sent.
        // miles
        body('inv_miles')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .isNumeric()
            .withMessage('Please provide Vehicle Miles.'), // on error this message is sent.
        // color
        body('inv_color')
            .trim()
            .escape()
            .notEmpty()
            .isLength({ min: 1 })
            .withMessage('Please provide a Vehicle Color.'), // on error this message is sent.
    ];
};

/* ******************************
 * Check data and return errors or continue to classification_name
 * ***************************** */
invValidate.checkRegData = async (req, res, next) => {
    let errors = [];
    errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.redirect('inv/vehicle');
        return;
    }
    next();
};

/* ******************************
 * Check data and return errors or continue to classification_name
 * ***************************** */
invValidate.checkUpdateData = async (req, res, next) => {
    let errors = [];
    errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.redirect('inv/');
        return;
    }
    next();
};

module.exports = invValidate;
