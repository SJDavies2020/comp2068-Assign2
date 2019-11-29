const express = require('express');
const router = express.Router();
const survey = require('../models/survey');

router.get('/results', async(req, res, next) => {
    const surveys = await survey.find({}).catch(() => {
        return [];
    });
    res.render('surveys', {surveys});
});

router.post('/create-survey', async(req, res, next) => {
    const surveys = new survey(req.body);
    await surveys.save();
    res.redirect('/surveys');
})

module.exports = router;