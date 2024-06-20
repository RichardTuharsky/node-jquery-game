const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('Score', scoreSchema);
