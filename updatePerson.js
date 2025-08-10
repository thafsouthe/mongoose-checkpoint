// updatePerson.js
require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/Person');

async function updatePersonFavoriteFoods(personId) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Step 1: Find the person by ID
    const person = await Person.findById(personId);
    if (!person) {
      console.log(`⚠️ No person found with ID: ${personId}`);
      return;
    }

    // Step 2: Add a new favorite food
    person.favoriteFoods.push('hamburger');

    // Step 3: Save the updated document
    const updatedPerson = await person.save();

    console.log('📌 Updated person:');
    console.dir(updatedPerson, { depth: 2 });

  } catch (err) {
    console.error('❌ Error during update:', err);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

// Replace with an _id you got earlier
updatePersonFavoriteFoods('68992af15f8ccdef36c8995c');
