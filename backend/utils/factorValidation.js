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

const highEnd = check("highEnd")
  .notEmpty()
  .withMessage("Must provide a percentage for high end markup")
  .custom(val => {
      if(+val <= 0) throw new Error("High end markup must be a positive number");
      else if(+val >= 101) throw new Error("High end markup must be under 101");
      else return true;
    });

const complicated = check("complicated")
    .notEmpty()
    .withMessage("Must provide a percentage for complicated job markup")
    .custom(val => {
        if(+val <= 0) throw new Error("Complicated job markup must be a positive number");
        else if(+val >= 101) throw new Error("Complicated job markup must be under 101");
        else return true;
      });

const complicatedClient = check("complicatedClient")
      .notEmpty()
      .withMessage("Must provide a percentage for complicated client markup")
      .custom(val => {
          if(+val <= 0) throw new Error("Complicated client markup must be a positive number");
          else if(+val >= 101) throw new Error("Complicated client markup must be under 101");
          else return true;
        });


exports.validateFactor = [
    familyFriend,
    highEnd,
    complicated,
    complicatedClient,
    handleValidationErrors,
];