const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: String,
  ingredients: String,
  origin: String,
  description: String,
  image: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;