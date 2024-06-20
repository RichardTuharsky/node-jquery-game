const express = require('express');
const Score = require('../models/score');
const router = express.Router();

router.get('/score', async (req, res) => {
  try {
    const score = await Score.findOne();
    res.json(score);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/score', async (req, res) => {
  try {
    const { points, clicks } = req.body;
    let score = await Score.findOne();
    if (score) {
      score.points = points;
      score.clicks = clicks;
    } else {
      score = new Score({ points, clicks });
    }
    await score.save();
    res.json(score);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
