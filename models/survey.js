const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const survey = mongoose.model('survey', surveySchema);
module.exports = survey;