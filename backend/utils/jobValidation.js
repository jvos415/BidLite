const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");

const jobTitle = check("Job Title")
  .notEmpty()
  .withMessage("Job title cannot be empty")
  .isLength({ min: 3 })
  .withMessage("Job title must be longer than 2 characters")
  .isLength({ max: 3 })
  .withMessage("Job title must be less than 51 characters");

const description = check("Description")
  .isLength({ max: 300 })
  .withMessage("Job description cannot have more than 300 characters");

const fixtureList = check("Fixture List")
  .isLength({ max: 200 })
  .withMessage("Job description cannot have more than 200 characters");

const fixtures = check("Fixtures")
  .notEmpty()
  .withMessage("Must provide a number of fixtures")
  .isInt()
  .withMessage("Fixtures must be a number")
  .custom((val) => {
    if (val <= 0) throw new Error("Fixtures must be a positive number");
  });

const cost = check("Cost")
  .notEmpty()
  .withMessage("A job cost must be provided")
  .isFloat()
  .withMessage("Cost must be a number, Example: 100.00")
  .custom((val) => {
    if (val <= 0) throw new Error("Cost must be a positive number");
  });

exports.validateJob = [
  jobTitle,
  description,
  fixtureList,
  fixtures,
  cost,
  handleValidationErrors,
];
