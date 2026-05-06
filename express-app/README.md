# Express Authentication Backend

A simple, beginner-friendly Node.js Express application for learning authentication concepts.

## 📁 Project Structure

```
express-app/
├── index.js                    # Main server entry point
├── routes/
│   └── auth.js                 # Authentication routes (signup, login, users)
├── services/
│   └── userService.js          # User business logic (CRUD operations)
├── middleware/
│   ├── logging.js              # Request/response logging middleware
│   └── errorHandler.js         # Error handling middleware
├── utils/
│   └── hash.js                 # Bcrypt password hashing utilities
├── users.json                  # Persistent user storage (JSON file)
└── package.json                # Project dependencies
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

This will install:

- `express`: Web framework
- `bcrypt`: Password hashing library

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

Output:

```
╔════════════════════════════════════════╗
║  Express Auth Server Running           ║
║  Port: 3000                            ║
║  Environment: development              ║
╚════════════════════════════════════════╝
```

## 📚 API Endpoints

### Health Check

```http
GET /health
```

**Response:**

```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

### User Signup

```http
POST /auth/signup
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123",
  "role": "user"
}
```

**Parameters:**

- `username` (required): Unique username
- `password` (required): Minimum 6 characters
- `role` (optional): User role - `"user"` (default) or `"admin"`

**Success Response (201):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "1705318200000",
    "username": "john_doe",
    "role": "user",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Responses:**

- `400`: Missing username/password, password too short, or invalid role
- `409`: User already exists

---

### User Login

```http
POST /auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123"
}
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "john_doe_1705318200000",
  "user": {
    "id": "1705318200000",
    "username": "john_doe",
    "role": "user",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Responses:**

- `400`: Missing username/password
- `401`: Invalid credentials (user not found or wrong password)

---

### Get All Users

```http
GET /auth/users
```

**Response (200):**

```json
{
  "success": true,
  "count": 2,
  "users": [
    {
      "id": "1705318200000",
      "username": "john_doe",
      "role": "user",
      "createdAt": "2024-01-15T10:30:00.000Z"
    },
    {
      "id": "1705318300000",
      "username": "admin_user",
      "role": "admin",
      "createdAt": "2024-01-15T10:35:00.000Z"
    }
  ]
}
```

---

## 🔐 Security & Authentication Flow

### Password Hashing

- Passwords are hashed using **bcrypt** with 10 salt rounds
- Passwords are NEVER stored in plain text
- Passwords are NEVER returned in API responses

### Authentication Flow

1. **Signup**: User registers with username and password
   - Password is hashed using bcrypt
   - User is stored in `users.json` with hashed password

2. **Login**: User authenticates with username and password
   - Password is compared with stored hash using bcrypt
   - Simple token is generated: `username_timestamp`
   - Token can be used for session management (in real apps, use JWT)

### Current Limitations (For Learning)

- Token is simple and not cryptographically signed (real apps use JWT)
- No token validation on protected routes yet
- Sessions reset when server restarts (use proper session management or JWT in production)

---

## 💾 Data Storage

### JSON File Storage

- Users are stored in `users.json`
- File is created/updated automatically when users register
- Persistent across server restarts

### User Object Structure

```json
{
  "id": "1705318200000",
  "username": "john_doe",
  "password": "$2b$10$...", // bcrypt hashed password
  "role": "user", // "user" (default) or "admin"
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

---

## 👥 User Roles

The system supports two user roles for access control:

- **user**: Standard user with basic permissions (default)
- **admin**: Administrator with elevated permissions

### Creating Users with Roles

**Default user role (during signup):**

```javascript
// When role is not specified, defaults to "user"
POST /auth/signup
{
  "username": "john_doe",
  "password": "securePassword123"
}
// Result: role = "user"
```

**Admin user creation:**

```javascript
// Specify role as "admin" during signup
POST /auth/signup
{
  "username": "admin_user",
  "password": "adminPassword123",
  "role": "admin"
}
// Result: role = "admin"
```

### Role Validation

- Only valid roles: `"user"` and `"admin"`
- Invalid roles will be rejected with error: `400 Bad Request`

---

## 📝 Code Walkthrough

### Hash Utility (`utils/hash.js`)

```javascript
// Hash password
const hashedPassword = await hashPassword("myPassword123");

// Compare password
const isMatch = await comparePassword("myPassword123", hashedPassword);
// Returns: true
```

### User Service (`services/userService.js`)

```javascript
// Create user
const user = await createUser("john_doe", "password123");

// Validate user
const validUser = await validateUser("john_doe", "password123");

// Get all users
const users = await getAllUsers(); // passwords excluded
```

### Middleware (`middleware/`)

- **Logging**: Logs HTTP method, URL, and response status
- **Error Handler**: Catches errors and returns appropriate HTTP status codes

---

## 🧪 Testing with cURL or Postman

### Using cURL

**Signup:**

```bash
curl -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","password":"securePassword123"}'
```

**Login:**

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","password":"securePassword123"}'
```

**Get Users:**

```bash
curl http://localhost:3000/auth/users
```

### Using Postman

1. Create a new POST request to `http://localhost:3000/auth/signup`
2. Set body to JSON:
   ```json
   {
     "username": "john_doe",
     "password": "securePassword123"
   }
   ```
3. Send the request

---

## 🎯 Learning Points

This project teaches:

1. ✅ Express routing and middleware
2. ✅ Async/await patterns
3. ✅ Password hashing with bcrypt
4. ✅ Request validation
5. ✅ Error handling
6. ✅ File I/O with Node.js fs module
7. ✅ REST API design basics
8. ✅ Authentication flow concepts

---

## 🔮 Next Steps (For Further Learning)

1. **Add JWT**: Replace simple token with JWT (jsonwebtoken package)
2. **Protected Routes**: Create middleware to validate tokens
3. **Better Storage**: Use MongoDB or PostgreSQL instead of JSON file
4. **Environment Variables**: Use .env file for configuration (dotenv package)
5. **Input Validation**: Add more robust validation (express-validator package)
6. **CORS**: Enable CORS for frontend integration (cors package)
7. **Database Models**: Use an ORM like Mongoose or Sequelize
8. **Unit Tests**: Write tests with Jest or Mocha

---

## 📖 Key Resources

- [Express.js Documentation](https://expressjs.com/)
- [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
- [Node.js File System API](https://nodejs.org/api/fs.html)
- [REST API Best Practices](https://restfulapi.net/)

---

## ⚠️ Important: Not Production Ready

This project is **for learning purposes only**. For production applications:

- Use proper database (MongoDB, PostgreSQL, etc.)
- Implement JWT for token authentication
- Add HTTPS/SSL
- Use environment variables for secrets
- Add comprehensive validation
- Implement rate limiting
- Add proper logging system
- Use a session store

---

Enjoy learning! 🚀
