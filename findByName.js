// findByName.js
// Purpose: connect to the DB, find people by name using Model.find(), print results, then close connection.

// Load environment variables
require('dotenv').config();

const mongoose = require('mongoose');
const Person = require('./models/Person');

async function findPeopleByName(personName) {
  try {
    // Connect to MongoDB (uses MONGO_URI from .env)
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Use Model.find() to find all documents where name === personName
    // This returns an array (possibly empty)
    const people = await Person.find({ name: personName }).exec();

    // Print nicely
    console.log(`🔎 Found ${people.length} document(s) with name "${personName}":`);
    console.dir(people, { depth: 2 });

  } catch (err) {
    console.error('❌ Error during find:', err);
  } finally {
    // Ensure we always close the connection
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}

// CHANGE THIS to test other names (e.g., 'John Doe', 'Alice', etc.)
findPeopleByName('Alice');
