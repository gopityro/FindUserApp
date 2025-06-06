# FindUserApp 

A simple Node.js + Express + MongoDB REST API for fetching user data by ID.  
Built with modular structure and clean controller-service separation.

---

## 🎯 Objective

The goal of this project is to build a simple Node.js + Express API connected to MongoDB that retrieves user data based on a given ID.

- Expose a `GET` endpoint at `/api/users/:id`
- Query the `users` collection using a valid MongoDB ObjectId
- Return user details in JSON format only if the user is older than 21
- Return appropriate HTTP responses:
  - `200 OK` for valid users
  - `404 Not Found` for underage or non-existent users
  - `400 Bad Request` for invalid ObjectId values
---
## ⚙️ How to Set Up the App
### 1. Set up mongodb
Make sure MongoDB is installed and running locally on your machine.

- 📦 Install MongoDB: [Download & Install MongoDB](https://www.mongodb.com/try/download/community)
- ▶️ Start the MongoDB service
- Set the MontgoDB server address properly as shown in location `/FindUserApp/.env.example`
### 2. Set Up Node.js

Make sure Node.js (v18 or later) and npm are installed on your system.

- 📥 Download & Install: [Node.js Official Site](https://nodejs.org/)
- 📦 Verify installation:

```bash
node -v
npm -v
```

### 3. Clone the Repository
```bash
git clone https://github.com/gopityro/FindUserApp.git
cd FindUserApp
```
**Install Dependencies**
```bash
npm install
```
### 4.Seed the Database (This is requried to test api)

You can populate the database with sample users by running the seed script:

```bash
node scripts/seed.js
```
Below will be the output after running `node scripts/seed.js`
```bash
MongoDB connected: localhost
Connected to MongoDB
Success: Inserted 3 users:
{
  _id: new ObjectId('68427431aab0f2ae763cf637'),
  name: 'John Doe',
  email: 'johndoe@email.com',
  age: 30
}
{
  _id: new ObjectId('68427431aab0f2ae763cf638'),
  name: 'Gopi Mallolu',
  email: 'gopimallolu@email.com',
  age: 25
}
{
  _id: new ObjectId('68427431aab0f2ae763cf639'),
  name: 'Underage User',
  email: 'teen@example.com',
  age: 18
}
```
### 4.Start Server
```bash
node server.js
```

## ✅ Results

After starting the server, you can verify that the app is running and the API is working as expected:

### 1. Check the Home Route

Open your browser and navigate to: `http://localhost:5050/` you should see similar to below screenshot:
<img width="687" alt="image" src="https://github.com/user-attachments/assets/131f01c7-5896-40ee-881c-73ab5c87b3de" />

### 2. Test API Endpoint
I have used postman to test this api
#### 1. using valid user ID
```bash
http://localhost:5050/api/users/68427431aab0f2ae763cf637
```
Below the is the screenshot of response:
<img width="841" alt="Screenshot 2025-06-06 at 1 45 28 AM" src="https://github.com/user-attachments/assets/6664b26b-1cf4-4b18-8532-ea81f435afd3" />

#### 2. using userID below age 21
```bash
http://localhost:5050/api/users/68427431aab0f2ae763cf639
```
<img width="855" alt="image" src="https://github.com/user-attachments/assets/0a2ebd55-4037-46eb-81b3-9ad4bc45f2c8" />

### 3. using invalid userID 
<img width="853" alt="image" src="https://github.com/user-attachments/assets/918e049c-283d-4849-8574-8dccbdd4676b" />

