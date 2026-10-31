# 📁 Chai aur Filesystem & Multer

A comprehensive **Node.js, Express, Multer, ImageKit, and MongoDB** file upload and file management system. Features practical demonstrations of the core `fs` module (Sync, Async Callback Hell, and Promises), Multer disk storage, file validation, local static delivery, and cloud streaming to ImageKit with automatic cleanup.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-EE82EE?style=for-the-badge&logo=dependabot&logoColor=white)
![ImageKit](https://img.shields.io/badge/ImageKit-0052CC?style=for-the-badge&logoColor=white)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [fs Module Demonstrations](#-fs-module-demonstrations)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Database Model](#-database-model)
- [Author](#-author)

---

## ✨ Features

- ✅ **Core Node.js `fs` Module** - Hands-on implementations of synchronous, asynchronous callback, and modern `node:fs/promises` workflows.
- ✅ **Multipart Form-Data Handling** - Streamlined file uploads powered by Multer.
- ✅ **Local Disk Storage** - Unique file naming with timestamps, random hashes, and automatic directory creation.
- ✅ **File Validation** - Strict MIME-type checking (PNG, JPEG, GIF, WebP) and 5MB file size limits.
- ✅ **Static Asset Serving** - Directly access uploaded files via Express static middleware.
- ✅ **ImageKit Cloud Upload** - High-speed stream upload to ImageKit cloud with local temp file cleanup.
- ✅ **MongoDB Metadata Tracking** - Records file properties (original name, URL, size, storage type, cloud fileId) for fast retrieval.
- ✅ **Cascading Deletion** - Removes file records from MongoDB and unlinks physical files from local disk or cloud.
- ✅ **Health Check Endpoint** - Live status, uptime, and timestamp monitoring.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Node.js** | JavaScript Runtime Environment |
| **Express.js** | Minimal and Flexible Web Framework |
| **Multer** | Middleware for handling `multipart/form-data` |
| **MongoDB & Mongoose** | Database and ODM for file metadata tracking |
| **@imagekit/nodejs** | SDK for cloud storage and media delivery |
| **pnpm** | Fast, disk space efficient package manager |
| **dotenv** | Environment variable management |
| **cookie-parser** | Cookie parsing middleware |

---

## 📁 Project Architecture

```text
chai-aur-filesystem/
├── server.js                        # Application entry point & DB connection
├── package.json                     # Project manifest and pnpm scripts
├── pnpm-lock.yaml                   # Deterministic pnpm dependency lock
├── docker-compose.yml               # MongoDB local container service
├── env.example                      # Sample environment variables
├── public/
│   ├── test-avatar.png              # Test asset for upload verification
│   └── uploads/                     # Local disk destination for Multer
└── src/
    ├── app.js                       # Express app configuration & middleware
    ├── common/
    │   ├── config/
    │   │   ├── db.js                # MongoDB connection handler
    │   │   └── imagekit.js          # ImageKit SDK client initialization
    │   ├── middleware/
    │   │   ├── multer.middleware.js # Multer diskStorage, limits & fileFilter
    │   │   └── error.middleware.js  # Central error handler (Multer & ApiError)
    │   ├── models/
    │   │   └── file.model.js        # Mongoose Schema for file metadata
    │   └── utils/
    │       └── api-error.js         # Custom API error utility
    └── modules/
        ├── files/
        │   ├── file.controller.js   # Upload, fetch, and delete controllers
        │   └── file.routes.js       # Express routes for files
        └── fs-module/
            ├── fs-sync.js           # Synchronous fs methods
            ├── fs-async.js          # Asynchronous callback hell example
            └── fs-promises-same-work-new-way.js # Modern fs/promises pattern
```

---

## 🔬 fs Module Demonstrations

Located in `src/modules/fs-module/`:

1. **`fs-sync.js` (Synchronous)**:
   - Demonstrates blocking file execution: `writeFileSync`, `readFileSync`, `appendFileSync`, `mkdirSync`, `renameSync`, `cpSync`, `unlinkSync`, and modern `rmSync`.
2. **`fs-async.js` (Callback Hell)**:
   - Illustrates nested callback patterns: reading `b.txt` -> writing `c.txt` -> appending data -> unlinking `b.txt`.
3. **`fs-promises-same-work-new-way.js` (Modern Promises)**:
   - Solves callback hell using `import fs from "node:fs/promises"`, clean `try/catch` error handling, and top-level `await`.

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18+)
- **pnpm** (`npm i -g pnpm`)
- **MongoDB** (Local, Docker, or MongoDB Atlas)

### 2. Installation
```bash
# Navigate to project directory
cd "backend best collection/chai-aur-filesystem"

# Install dependencies using pnpm
pnpm install
```

### 3. Environment Configuration
Create a `.env` file from `.env.example`:
```bash
cp env.example .env
```
Update your variables:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/chai-filesystem
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

### 4. Database Setup (Optional Docker)
```bash
pnpm db:up     # Start MongoDB container
pnpm db:down   # Stop MongoDB container
```

### 5. Running the Application
```bash
pnpm dev       # Start in development mode with nodemon
# or
pnpm start     # Start in production mode
```

---

## 📡 API Endpoints

### Health Check
- **`GET /health`** - Verify server status, uptime, and system time.

### File Management
| Method | Endpoint | Description | Body Type | Field Name |
| :--- | :--- | :--- | :--- | :--- |
| **POST** | `/upload` | Local upload to disk + MongoDB metadata save | `form-data` | `avatar` |
| **POST** | `/upload-cloud` | Stream to ImageKit cloud + temp disk cleanup + DB save | `form-data` | `avatar` |
| **GET** | `/files` | Retrieve all file records from MongoDB | - | - |
| **DELETE** | `/files/:id` | Delete record from DB and unlink physical storage | - | - |
| **GET** | `/uploads/:filename` | Direct static URL to view locally uploaded files | - | - |

---

## 🗄️ Database Model

```javascript
{
  originalName: { type: String, required: true },
  filename:     { type: String, required: true },
  url:          { type: String, required: true },
  storageType:  { type: String, enum: ["local", "imagekit"], default: "local" },
  mimetype:     { type: String },
  size:         { type: Number, required: true }, // Size in bytes
  fileId:       { type: String, default: null }, // ImageKit file ID
  createdAt:    Date,
  updatedAt:    Date
}
```

---

## 👨‍💻 Author

**Abdul Rahman**
- GitHub: [@abdulrdeveloper](https://github.com/abdulrdeveloper)
