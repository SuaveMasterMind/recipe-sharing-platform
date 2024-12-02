const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  author: { type: String, required: true },
  ratings: [{ user: String, score: Number }],
  comments: [{ user: String, comment: String, date: Date }]
});

module.exports = mongoose.model('Recipe', recipeSchema);