require("dotenv").config();
const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch(err => console.error("❌ Connection error:", err));

// 2️⃣ Create Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// 3️⃣ Create Model
const Person = mongoose.model("Person", personSchema);

// 4️⃣ PHASE 4 – Create and Save a Single Person
const person = new Person({
  name: "John Doe",
  age: 30,
  favoriteFoods: ["Pizza", "Burgers"]
});

person
  .save()
  .then(data => {
    console.log("📌 Person saved:", data);

    // 5️⃣ PHASE 5 – Create Many Records
    const arrayOfPeople = [
      { name: "Alice", age: 25, favoriteFoods: ["Pasta", "Ice Cream"] },
      { name: "Bob", age: 40, favoriteFoods: ["Steak", "Salad"] },
      { name: "Charlie", age: 35, favoriteFoods: ["Sushi", "Ramen"] }
    ];

    return Person.create(arrayOfPeople);
  })
  .then(docs => {
    console.log("📌 Many people created:", docs);
    mongoose.connection.close(); // Close connection after all is done
  })
  .catch(err => console.error("❌ Error:", err));
