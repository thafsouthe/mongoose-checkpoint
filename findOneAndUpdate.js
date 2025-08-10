// findOneAndUpdate.js
require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/Person');

async function updatePersonAgeByName(personName) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Find one person by name and update their age to 20
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName },   // search condition
      { age: 20 },            // update
      { new: true }           // return updated document
    );

    console.log('📌 Updated person:');
    console.dir(updatedPerson, { depth: 2 });

  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

// Replace with a name from your DB
updatePersonAgeByName('John Doe');
