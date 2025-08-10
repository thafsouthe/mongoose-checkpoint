require('dotenv').config();
const mongoose = require('mongoose');
const Person = require('./models/person');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    return deleteManyPeople();
  })
  .catch(err => console.error('❌ Connection error:', err));

async function deleteManyPeople() {
  try {
    const result = await Person.deleteMany({ name: "Mary" });
    console.log('📌 Delete result:', result);
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
  }
}
