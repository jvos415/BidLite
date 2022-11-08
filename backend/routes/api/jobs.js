const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const jobValidations = require("../../utils/jobValidation");

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
  jobValidations.validateJob,
  asyncHandler(async (req, res) => {
    const job = await Job.create(req.body);

    return res.json(job);
  })
);

router.put(
  "/:userId",
  jobValidations.validateJob,
  asyncHandler(async (req, res) => {
    const { id, userId, jobTitle, description, fixtureList, fixtures, cost } =
      req.body;
    const updatedAt = new Date();
    const job = await Job.update(
      id,
      userId,
      jobTitle,
      description,
      fixtureList,
      fixtures,
      cost,
      updatedAt
    );
    return res.json(job);
  })
);

router.delete(
  "/:userId",
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const job = await Job.findByPk(id);
    await job.destroy();
    return res.json(job);
  })
);

module.exports = router;
