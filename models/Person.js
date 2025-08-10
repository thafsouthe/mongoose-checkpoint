// models/Person.js

const mongoose = require('mongoose');

// Define the schema for a Person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Name is required
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String] // Array of strings
  }
});

// Create the model from the schema
const Person = mongoose.model('Person', personSchema);

// Export the model so we can use it in other files
module.exports = Person;
