# Mongoose Checkpoint

## 📌 Project Overview

This project demonstrates CRUD operations using **Mongoose** with MongoDB Atlas, following the official checkpoint requirements.
Each phase includes **code implementation** and **sample outputs** from the console.

---

## 📂 Project Structure

```
mongoose-checkpoint/
│
├── models/
│   └── Person.js
│
├── .env
├── index.js                # Phase 4 – Create & Save a Person
├── createManyPeople.js     # Phase 5 – Create Many Documents
├── findByName.js           # Phase 6 – Find Documents
├── findById.js             # Phase 7 – Find by ID
├── findEditSave.js         # Phase 8 – Find, Edit, Save
├── findAndUpdate.js        # Phase 9 – Find and Update
├── findByIdAndRemove.js    # Phase 10 – Find and Remove
├── deleteMany.js           # Phase 11 – Delete Many
├── chainQuery.js           # Phase 12 – Chain Search Query Helpers
└── package.json
```

---

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone <your-repo-link>
cd mongoose-checkpoint
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

```env
MONGO_URI=your-mongodb-atlas-uri
```

4. **Run a script**

```bash
node index.js
```

---

## 🚀 Steps Completed with Outputs

### **PHASE 1 – Install & Setup Mongoose**

* Installed `mongoose` and `dotenv`
* Connected to MongoDB Atlas successfully

✅ **Sample Output**

```
✅ MongoDB Connected!
```

---

### **PHASE 2 – Create Person Model**

* Created `models/Person.js` with:

  ```js
  const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
  });
  ```

---

### **PHASE 3 – Create & Save a Single Person**

📂 **File:** `index.js`

✅ **Sample Output**

```
✅ MongoDB Connected!
📌 Person saved: {
  name: 'John Doe',
  age: 30,
  favoriteFoods: [ 'Pizza', 'Burgers' ],
  _id: new ObjectId('68992af15f8ccdef36c8995c'),
  __v: 0
}
```

---

### **PHASE 4 – Create Many People**

📂 **File:** `createManyPeople.js`

✅ **Sample Output**

```
✅ People added: [
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Tacos'] },
  { name: 'Bob', age: 40, favoriteFoods: ['Steak', 'Salad'] }
]
```

---

### **PHASE 5 – Find People by Name**

📂 **File:** `findByName.js`

✅ **Sample Output**

```
📌 Found people: [
  { name: 'John Doe', age: 30, favoriteFoods: ['Pizza', 'Burgers'] }
]
```

---

### **PHASE 6 – Find by ID**

📂 **File:** `findById.js`

✅ **Sample Output**

```
📌 Person found by ID: {
  name: 'Alice',
  age: 25,
  favoriteFoods: ['Sushi', 'Tacos']
}
```

---

### **PHASE 7 – Find, Edit, Save**

📂 **File:** `findEditSave.js`

✅ **Sample Output**

```
📌 Updated person: {
  name: 'Alice',
  age: 25,
  favoriteFoods: ['Sushi', 'Tacos', 'Hamburger']
}
```

---

### **PHASE 8 – Find and Update**

📂 **File:** `findAndUpdate.js`

✅ **Sample Output**

```
📌 Person updated: {
  name: 'Bob',
  age: 20,
  favoriteFoods: ['Steak', 'Salad']
}
```

---

### **PHASE 9 – Find by ID and Remove**

📂 **File:** `findByIdAndRemove.js`

✅ **Sample Output**

```
📌 Deleted person: {
  name: 'Alice',
  age: 25,
  favoriteFoods: ['Sushi', 'Tacos', 'Hamburger']
}
```

---

### **PHASE 10 – Delete Many**

📂 **File:** `deleteMany.js`

✅ **Sample Output**

```
📌 Delete result: { acknowledged: true, deletedCount: 3 }
```

---

### **PHASE 11 – Chain Search Query**

📂 **File:** `chainQuery.js`

✅ **Sample Output**

```
📌 Query result: [
  { name: 'John Doe', age: 30, favoriteFoods: ['Pizza', 'Burgers'] }
]
```

---

## 🛠 Technologies Used

* **Node.js**
* **MongoDB Atlas**
* **Mongoose**
* **dotenv**

---

## 📄 How to Submit

* Zip your project folder (without `node_modules`)
* Submit via the platform

---

