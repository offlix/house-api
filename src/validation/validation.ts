import { body } from 'express-validator';

const validate = [
  body('title')
    .isLength({ min: 3, max: 50 })
    .withMessage('Title should be between 3 to 50 characters'),
  body('description')
    .isLength({ min: 10, max: 200 })
    .withMessage('Description should be between 3 to 50 characters'),
  body('address')
    .isLength({ min: 10, max: 100 })
    .withMessage('Title should be between 3 to 50 characters'),
  body('price')
    .isNumeric()
    .withMessage('Title should be between 3 to 50 characters'),
];

export { validate };
