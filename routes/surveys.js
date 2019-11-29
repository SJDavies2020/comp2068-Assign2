const express = require('express');
const router = express.Router();
const survey = require('../models/survey');

router.get('/results', async(req, res, next) => {
    const surveys = await survey.find({}).catch(() => {
        return [];
    });
    res.render('results.pug', {surveys});
});

module.exports = router;