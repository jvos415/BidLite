const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { User, Job } = require("../../db/models");


router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    const jobs = await Job.findAll({
      where: {
        userId: user.id,
      },
    });
    return res.json(jobs);
  })
);

router.post(
  "/:userId",
  asyncHandler(async (req, res) => {
    const { userId, jobTitle, description, fixtureList, fixtures, cost } =
      req.body;
    const updatedAt = new Date();
    const createdAt = new Date();
    const job = await Job.create(
      userId,
      jobTitle,
      description,
      fixtureList,
      fixtures,
      cost,
      updatedAt,
      createdAt
    );
    return res.json(job);
  })
);

module.exports = router;
