// validations/checkReviews.js
const { check, validationResult } = require('express-validator');

// Middleware for validating review data
const validateReview = [
  check('reviewer')
    .isString()
    .withMessage('Reviewer name must be a string')
    .notEmpty()
    .withMessage('Reviewer name cannot be empty'),

  check('title')
    .isString()
    .withMessage('Title must be a string')
    .notEmpty()
    .withMessage('Title cannot be empty'),

  check('content')
    .isString()
    .withMessage('Content must be a string')
    .notEmpty()
    .withMessage('Content cannot be empty'),

  check('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be an integer between 1 and 5'),

  check('tour_id').isInt().withMessage('Tour ID must be an integer'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateReview };
