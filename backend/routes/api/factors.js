const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const factorValidations = require("../../utils/factorValidation");
const { User, Factor } = require("../../db/models");

router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    const factors = await Factor.findAll({
      where: {
        userId: user.id,
      },
    });
    return res.json(factors);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    const userId = user.id;

    const ogFactors = await Factor.create({
      userId,
      familyFriend: 15,
      highEnd: 15,
      complicated: 15,
      complicatedClient: 15,
    });

    return res.json(ogFactors);
  })
);

router.put(
  "/",
  factorValidations.validateFactor,
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.body.userId);
    let factors = await Factor.findAll({
      where: {
        userId: user.id,
      },
    });
    factors = factors[0];
    await factors.update(req.body);
    return res.json(factors);
  })
);

module.exports = router;
