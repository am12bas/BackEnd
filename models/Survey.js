//schema
const mongoose = require('mongoose');
const surveySchema = new mongoose.Schema({
    name: String,
    gender: String,
    nationality: String,
    email: String,
    phone: String,
    Departure_city: String,
    Arrival_city: String,
    Travel_date: String,
    Return_date: String,
});

module.exports = mongoose.model('Survey', surveySchema);
