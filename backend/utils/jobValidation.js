const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");

const jobTitle = check("jobTitle")
  .notEmpty()
  .withMessage("Job title cannot be empty")
  .isLength({ min: 3 })
  .withMessage("Job title must be longer than 2 characters")
  .isLength({ max: 50 })
  .withMessage("Job title cannot have more than 50 characters");

const description = check("description")
  .isLength({ max: 300 })
  .withMessage("Job description cannot have more than 300 characters");

const fixtureList = check("fixtureList")
  .isLength({ max: 200 })
  .withMessage("Job description cannot have more than 200 characters");

const fixtures = check("fixtures")
  .notEmpty()
  .withMessage("Must provide a number of fixtures")
  .custom(val => {
    if (+val <= 0) throw new Error("Fixtures must be a positive number")
    else return true;
  });

  const estimate = check("estimate")
  .notEmpty()
  .withMessage("A job estimate must be provided")
  .custom(val => {
    if (+val <= 0) throw new Error("Estimate must be a positive number")
    else return true;
  });  

const cost = check("cost")
  .notEmpty()
  .withMessage("A job cost must be provided")
  .custom(val => {
    if (+val <= 0) throw new Error("Cost must be a positive number")
    else return true;
  });

exports.validateJob = [
  jobTitle,
  description,
  fixtureList,
  fixtures,
  estimate,
  cost,
  handleValidationErrors,
];
