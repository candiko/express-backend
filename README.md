# Express Backend for Dictionary Application

This repository contains the backend service for the Dictionary Application. It provides a RESTful API for searching word definitions, pronunciations, etymologies, and search history management.

## 🚀 Project Overview

The Dictionary Application allows users to:

Search for words and retrieve definitions, pronunciations, and etymologies.

View the first known use and historical context of words.

Maintain a search history when logged in.

Browse past searches and manage user profiles.

This backend is responsible for handling API requests, database interactions, and authentication.

## 🛠️ Tech Stack

### Backend:

Node.js - JavaScript runtime for backend development

Express.js - Web framework for handling API routes

### Database:

PostgreSQL - Relational database for structured data (e.g., users, search history)

MongoDB - NoSQL database for flexible data storage (e.g., word metadata, definitions)

### Other Tools:

dotenv - Environment variable management

cors - Middleware for cross-origin requests

body-parser - Middleware for handling request bodies

pg - PostgreSQL client for Node.js

mongoose - ODM for MongoDB

## 📌 Setup Instructions

### 1️⃣ Prerequisites

Ensure you have the following installed:

Node.js (v16+ recommended)

PostgreSQL (for relational data)

MongoDB (for non-relational data)

### 2️⃣ Clone the Repository

```
git clone https://github.com/your-username/express-backend.git
cd express-backend
```

### 3️⃣ Install Dependencies

```
npm install
```

### 4️⃣ Set Up Environment Variables

Create a .env file in the root directory and configure your database connection:

```
PORT=5000
POSTGRES_URI=your_postgresql_connection_string
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5️⃣ Run the Server

Start the backend server locally:

```
npm start
```

The API will be available at `http://localhost:5000`.

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### 📖 Word Search

GET /api/words/:word - Retrieve word details

```
GET /api/words/example
```

Response:

```
{
"word": "example",
"type": "noun",
"pronunciation": "/ˈɛɡzæmpəl/",
"definition": "A representative form or pattern",
"etymology": "From Latin exemplum"
}
```

### 🔍 Search History

GET /api/history - Retrieve user search history (requires authentication)

```
GET /api/history
```

Response:

```
[
{ "word": "example", "searchedAt": "2025-01-30T12:00:00Z" },
{ "word": "express", "searchedAt": "2025-01-30T12:05:00Z" }
]
```

### 📝 User Profile

GET /api/users/:id - Retrieve user profile

```
GET /api/users/123
```

Response:

```
{
"id": "123",
"username": "john_doe",
"email": "john@example.com",
"searchHistory": [ "example", "express" ]
}
```

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please submit a pull request or open an issue for discussions.

## 📧 Contact

For any inquiries or suggestions, feel free to reach out!
