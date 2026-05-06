# Quick Start Guide

## 🚀 Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

---

## 🧪 Quick Test (Copy & Paste)

### 1. Signup

```bash
curl -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

### 2. Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

### 3. Get All Users

```bash
curl http://localhost:3000/auth/users
```

### 4. Check Health

```bash
curl http://localhost:3000/health
```

---

## 📂 Project Files

| File                         | Purpose                               |
| ---------------------------- | ------------------------------------- |
| `index.js`                   | Main server (Express setup)           |
| `routes/auth.js`             | Auth endpoints (signup, login, users) |
| `services/userService.js`    | Business logic (user operations)      |
| `utils/hash.js`              | Password hashing (bcrypt)             |
| `middleware/logging.js`      | Request logging                       |
| `middleware/errorHandler.js` | Error handling                        |
| `users.json`                 | User data storage (persistent)        |

---

## 🔑 Key Concepts Covered

1. **Express Routing**: How to create API endpoints
2. **Middleware**: Logging and error handling
3. **Password Hashing**: Secure password storage with bcrypt
4. **Async/Await**: Asynchronous operations
5. **File I/O**: Reading/writing JSON with fs module
6. **REST API**: Request/response patterns

---

## 📖 Full Documentation

See [README.md](README.md) for complete documentation.

See [API_EXAMPLES.md](API_EXAMPLES.md) for more examples.
