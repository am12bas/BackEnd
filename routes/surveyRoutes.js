const express = require('express');
const Survey = require('../models/Survey');

const router = express.Router();

// Submit survey
router.post('/submit', async (req, res) => {
    try {
        const survey = new Survey(req.body);
        await survey.save();
        res.status(201).send('Survey submitted successfully!');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Get all surveys
router.get('/all', async (req, res) => {
    try {
        const surveys = await Survey.find();
        res.status(200).json(surveys);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// delete surveys
router.delete('/:id/delete', async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedSurvey = await Survey.findByIdAndDelete(id);

        if (!deletedSurvey) {
            return res.status(404).json({ message: 'Survey not found' });
        }

        res.status(200).json({ message: 'Survey deleted successfully', survey: deletedSurvey });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

/*// Delete all data from the database
router.delete('/delete-all', async (req, res) => {
    try {
        
        // Delete all surveys
        const deletedSurveys = await Survey.deleteMany({});

        if (deletedSurveys.deletedCount === 0) {
            return res.status(404).json({ message: 'No surveys to delete' });
        }

        res.status(200).json({ message: 'All surveys deleted successfully', count: deletedSurveys.deletedCount });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});*/

module.exports = router;

