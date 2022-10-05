const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { User, Job } = require('../../db/models');

const validateSignup = [];

router.get(
    '/:userId',
    asyncHandler(async(req, res) => {
        const user = await User.findByPk(req.params.userId)
        const jobs = await Job.findAll({
            where: {
                userId: user.id
            }
        });
        return res.json(jobs);
    })
);

module.exports = router;
