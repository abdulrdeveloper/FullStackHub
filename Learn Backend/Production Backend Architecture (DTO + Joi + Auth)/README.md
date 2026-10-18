# 🏛️ Enterprise REST API Architecture (Express + DTO + Joi)

A clean, scalable, production-ready backend architecture for Node.js & Express 5. Inspired by enterprise frameworks like **NestJS** and **Spring Boot**, this boilerplate demonstrates how to build maintainable REST APIs in plain JavaScript with strict request validation, structured error handling, and robust security.

---

## 🚀 Why this Architecture? (1-Minute Overview)

In standard Express tutorials, developers often write validation directly inside controllers:
```javascript
// ❌ Traditional Messy Way:
app.post("/register", async (req, res) => {
    if (!req.body.email) return res.status(400).json({ error: "Email is required" });
    if (req.body.password.length < 8) return res.status(400).json({ error: "Password too short" });
    // Controller becomes cluttered with 50 lines of validation!
});
```

### ✅ The Enterprise Way (This Architecture):
Validation is moved completely out of the controller into a **DTO (Data Transfer Object)** layer using an intercepting middleware:
```javascript
// ✅ Clean Enterprise Way:
router.post("/register", validate(RegisterDto), authController.register);
```
- **Controller** receives 100% verified, sanitized data.
- **DTOs** are reusable blueprints with inheritance.
- **Middleware** handles errors automatically before business logic runs.

---

## 📂 Project Directory Structure

```text
├── env.example                  # Environment variable blueprint
├── package.json                 # Project dependencies & scripts
├── server.js                    # Server listener & database bootstrapper
└── src/
    ├── app.js                   # Express application setup & middleware stack
    ├── common/                  # Shared core utilities across all modules
    │   ├── config/              # Database connection & configurations (db.js)
    │   ├── dto/                 # Base DTO engine (base.dto.js)
    │   ├── middleware/          # Validation & global middlewares (validate.middleware.js)
    │   └── utils/               # ApiResponse, ApiError, and JWT/Crypto helpers
    └── modules/                 # Modular domain features (Feature-first structure)
        ├── auth/                # Authentication domain
        │   ├── dto/             # Module-specific DTOs (register.dto.js)
        │   ├── auth.controller.js # HTTP request & response handler
        │   ├── auth.service.js    # Business logic & database operations
        │   ├── auth.routes.js     # Route definitions & middleware binding
        │   ├── auth.model.js      # Mongoose User schema & model
        │   └── auth.middleware.js  # Protected route auth guards
        └── cart/                # Future modules follow the exact same pattern
```

---

## 🧠 Core Architecture Patterns Explained

### 1. The Generic DTO Engine (`BaseDTO`)
**File:** `src/common/dto/base.dto.js`

Instead of rewriting Joi validation in every route, `BaseDTO` acts as a generic engine:
```javascript
class BaseDTO {
    static schema = Joi.object({});
    static validate(data) {
        const { error, value } = this.schema.validate(data, {
            abortEarly: false,   // Collect ALL validation errors, not just the first one
            stripUnknown: true   // Remove extra/unwanted hacker fields automatically!
        });
        if (error) {
            return { errors: error.details.map(d => d.message), data: null };
        }
        return { errors: null, data: value };
    }
}
```

### 2. Schema Inheritance (Overriding Rules)
**File:** `src/modules/auth/dto/register.dto.js`

New routes inherit from `BaseDto` and only define their specific schema:
```javascript
class RegisterDto extends BaseDto {
    static schema = Joi.object({
        name: Joi.string().trim().min(2).max(50).required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(8).required(),
        role: Joi.string().valid("customer", "seller").default("customer")
    });
}
```
*`RegisterDto` inherits `validate()` from `BaseDto` automatically.*

---

### 3. Higher-Order Validation Middleware
**File:** `src/common/middleware/validate.middleware.js`

A reusable middleware factory that runs before the controller:
```javascript
const validate = (dto) => {
    return (req, res, next) => {
        const { errors, data } = dto.validate(req.body);
        if (errors) {
            throw apiError.badRequest("Validation failed", errors);
        }
        req.body = data; // Replaces raw body with clean, sanitized data
        next();
    };
};
```

---

### 4. Standardized Response & Error Handling
- **`ApiResponse` (`src/common/utils/api-response.js`)**: Static helpers (`.ok()`, `.created()`, `.noContent()`) ensuring all success responses have a consistent JSON structure `{ success: true, message, data }`.
- **`ApiError` (`src/common/utils/api-error.js`)**: Custom error class extending JavaScript's native `Error` with HTTP status codes, operational flags, and error details array.

---

### 5. Security & Cryptography: Crypto vs JWT
**File:** `src/common/utils/jwt.utils.js`

- **Node Native `crypto` (Email Verification / Password Reset):**
  Uses `crypto.randomBytes(32)` to generate an unhashed `rawToken` sent in the user's email link, while storing a SHA-256 `hashedToken` in MongoDB. Even if the database is leaked, tokens cannot be forged.
- **JWT (Login Sessions):**
  Provides short-lived `accessTokens` (15m) and long-lived `refreshTokens` (7d) for authentication sessions.
- **Bcrypt (Password Hashing):**
  Passwords are encrypted using `bcryptjs` with 10 salt rounds before storage.

---

## 🛠️ How to Add a New Feature in 3 Steps

Adding any new module (e.g., `products`, `orders`) takes under 2 minutes:

1. **Create DTO**: `modules/products/dto/create-product.dto.js` extending `BaseDto`.
2. **Define Route**: Apply validation middleware:
   ```javascript
   router.post("/", validate(CreateProductDto), productController.create);
   ```
3. **Write Controller & Service**: Receive clean, pre-validated `req.body` and return `ApiResponse.created(res, data)`.

---

## 💻 Tech Stack
- **Runtime:** Node.js (ES Modules `"type": "module"`)
- **Framework:** Express 5
- **Database:** MongoDB via Mongoose
- **Validation:** Joi
- **Security:** Bcryptjs, Crypto, JsonWebToken
