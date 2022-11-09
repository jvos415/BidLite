const { check } = require("express-validator");
const { handleValidationErrors } = require("./validation");

const familyFriend = check("familyFriend")
    .notEmpty()
    .withMessage("Must provide a percentage for family friend discount")
    .custom(val => {
        if(+val <= 0) throw new Error("Family friend discount must be a positive number");
        else if(+val >= 101) throw new Error("Family friend discount must be under 101");
        else return true;
  });


exports.validateJob = [
    familyFriend,
    handleValidationErrors,
];