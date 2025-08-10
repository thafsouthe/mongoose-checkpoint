// findById.js
require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/Person');

async function findPersonById(personId) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const person = await Person.findById(personId).exec();

    if (person) {
      console.log('📌 Found person by ID:');
      console.dir(person, { depth: 2 });
    } else {
      console.log(`⚠️ No person found with ID: ${personId}`);
    }

  } catch (err) {
    console.error('❌ Error during findById:', err);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

// Replace with an _id you got from previous steps
findPersonById('68992af15f8ccdef36c8995c');
