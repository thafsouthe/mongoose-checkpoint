require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/person');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    return chainSearch();
  })
  .catch(err => console.error('❌ Connection error:', err));

async function chainSearch() {
  try {
    const foodToSearch = "Burritos";
    const people = await Person.find({ favoriteFoods: foodToSearch })
      .sort({ name: 1 }) // sort by name ascending
      .limit(2)          // limit to 2 documents
      .select('-age');   // exclude age field

    console.log('📌 People found:', people);
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}
