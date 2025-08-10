// findOneByFood.js
// Purpose: Find ONE person whose favoriteFoods array contains a given food.

// Load environment variables
require('dotenv').config();

const mongoose = require('mongoose');
const Person = require('./models/Person');

async function findOneByFood(food) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // findOne returns the FIRST matching document (or null if none found)
    const person = await Person.findOne({ favoriteFoods: food }).exec();

    if (person) {
      console.log(`🍽 Found a person who likes "${food}":`);
      console.dir(person, { depth: 2 });
    } else {
      console.log(`⚠️ No person found who likes "${food}"`);
    }

  } catch (err) {
    console.error('❌ Error during findOne:', err);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

// CHANGE this value to test other foods
findOneByFood('Pizza');
