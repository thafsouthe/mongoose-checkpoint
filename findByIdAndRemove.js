// findByIdAndRemove.js
require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/Person');

async function deletePersonById(personId) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Use findByIdAndDelete instead of findByIdAndRemove
    const deletedPerson = await Person.findByIdAndDelete(personId);

    console.log('📌 Deleted person:');
    console.dir(deletedPerson, { depth: 2 });

  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

// Replace with an actual _id from your DB
deletePersonById('68992af15f8ccdef36c8995c');
