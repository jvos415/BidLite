// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const jobsRouter = require('./jobs.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/jobs', jobsRouter);

module.exports = router;
