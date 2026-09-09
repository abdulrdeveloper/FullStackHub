# 🔐 Auth App - Backend

A complete **Node.js + Express + MongoDB** authentication system with JWT tokens, password hashing, and CRUD operations for posts.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Database Models](#-database-models)
- [Authentication Flow](#-authentication-flow)
- [Author](#-author)

---

## ✨ Features

- ✅ **User Registration** - Create new account with name, email, password
- ✅ **Password Hashing** - Secure password storage using bcrypt
- ✅ **JWT Authentication** - Token-based authentication
- ✅ **Cookie-based Tokens** - Secure HTTP-only cookies
- ✅ **Protected Routes** - Only authenticated users can create posts
- ✅ **Post CRUD** - Create posts with title and content
- ✅ **User-Post Relationship** - Each post linked to its author
- ✅ **Input Validation** - Required fields and unique email check
- ✅ **Error Handling** - Proper error responses

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime Environment | - |
| **Express.js** | Web Framework | ^5.2.1 |
| **MongoDB** | Database | - |
| **Mongoose** | ODM for MongoDB | ^9.9.5 |
| **JWT** | Authentication Tokens | ^9.0.3 |
| **bcryptjs** | Password Hashing | ^3.0.3 |
| **cookie-parser** | Cookie Parsing | ^1.4.7 |
| **dotenv** | Environment Variables | ^17.4.2 |

---

## 📁 Project Structure

```
backend/
├── server.js                 # Entry point - Server start
├── .env                      # Environment variables (git ignored)
├── .env.example              # Example environment file
├── .gitignore                # Git ignore file
├── package.json              # Dependencies & scripts
└── src/
    ├── app.js                # Express app setup & middleware
    ├── db/
    │   └── db.js             # MongoDB connection
    ├── models/
    │   ├── user.model.js     # User schema
    │   └── post.model.js     # Post schema
    ├── controller/
    │   └── auth.controller.js # Auth business logic
    └── routes/
        ├── auth.routes.js    # Auth endpoints
        └── post.routes.js    # Post endpoints
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [pnpm](https://pnpm.io/) (Package Manager)

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/abdulrdeveloper/web-dev-for-all.git
cd "web-dev-for-all/backend best collection/auth-app/backend"
```

**2. Install dependencies:**
```bash
pnpm install
```

**3. Create `.env` file:**
```bash
cp .env.example .env
```

**4. Add your credentials to `.env`:**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

**5. Start the server:**

### Base URL
```
http://localhost:3000/api
```

### Auth Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/register` | Register new user | ❌ No |

### Post Routes (`/api/posts`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/posts/create` | Create new post | ✅ Yes |

---

## 📝 API Usage Examples

### 1. Register User

**Request:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Abdul Rahman",
    "email": "abdul@example.com",
    "password": "password123"
  }'
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Abdul Rahman",
    "email": "abdul@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (400) - User already exists:**
```json
{
  "message": "User already exists"
}
```

---

### 2. Create Post (Protected Route)

**Request:**
```bash
curl -X POST http://localhost:3000/api/posts/create \
  -H "Content-Type: application/json" \
  -b "token=your_jwt_token_here" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first post!"
  }'
```

**Success Response (201):**
```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "507f1f77bcf86cd799439022",
    "title": "My First Post",
    "content": "This is the content of my first post!",
    "author": "507f1f77bcf86cd799439011",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (401) - No token:**
```json
{
  "message": "Unauthorized"
}
```

**Error Response (401) - Invalid token:**
```json
{
  "message": "Invalid token"
}
```

---

## 🗄️ Database Models

### User Model

```javascript
{
  name: String,        // Required
  email: String,       // Required, Unique
  password: String,    // Required (hashed)
  createdAt: Date,     // Auto-generated
  updatedAt: Date      // Auto-generated
}
```

### Post Model

```javascript
{
  title: String,       // Required
  content: String,     // Required
  author: ObjectId,    // Required, Reference to User
  createdAt: Date,     // Auto-generated
  updatedAt: Date      // Auto-generated
}
```

---

## 🔄 Authentication Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    REGISTRATION FLOW                             │
└─────────────────────────────────────────────────────────────────┘

1. User sends POST /api/auth/register
        │
        ▼
2. Check if user already exists
        │
        ▼
3. Hash password with bcrypt (12 rounds)
        │
        ▼
4. Save user to MongoDB
        │
        ▼
5. Generate JWT token (expires in 1 hour)
        │
        ▼
6. Set token in HTTP-only cookie
        │
        ▼
7. Return user data (without password)

┌─────────────────────────────────────────────────────────────────┐
│                      POST CREATION FLOW                          │
└─────────────────────────────────────────────────────────────────┘

1. User sends POST /api/posts/create (with cookie)
        │
        ▼
2. Extract token from cookies
        │
        ▼
3. Verify JWT token
        │
        ▼
4. Find user by decoded ID
        │
        ▼
5. Create new post with user as author
        │
        ▼
6. Save post to MongoDB
        │
        ▼
7. Return post data
```

---

## 🔒 Security Features

- **Password Hashing** - bcrypt with 12 salt rounds
- **HTTP-only Cookies** - Token not accessible via JavaScript
- **Secure Cookies** - Only HTTPS in production
- **SameSite Strict** - CSRF protection
- **Token Expiration** - JWT expires in 1 hour
- **Password Hidden** - Never returned in API responses

---

## 🛡️ Error Codes

| Code | Meaning | When |
|------|---------|------|
| `200` | OK | Request successful |
| `201` | Created | Resource created successfully |
| `400` | Bad Request | Validation error / User exists |
| `401` | Unauthorized | No token / Invalid token |
| `500` | Server Error | Internal server error |

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with auto-restart |
| `pnpm start` | Start production server |
| `pnpm test` | Run tests (not configured) |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

### **Abdul Rahman**

Full Stack Developer | Node.js | React | MongoDB

[![Portfolio](https://img.shields.io/badge/Portfolio-abdulrdeveloper.me-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://abdulrdeveloper.me)
[![GitHub](https://img.shields.io/badge/GitHub-abdulrdeveloper-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abdulrdeveloper)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abdulrdeveloper-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abdulrdeveloper)

---
