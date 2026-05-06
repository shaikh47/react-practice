/\*\*

- TESTING THE EXPRESS AUTH API
-
- This file contains example requests to test all the endpoints.
- You can use this with:
- - cURL (command line)
- - Postman (GUI)
- - Thunder Client (VS Code extension)
- - REST Client (VS Code extension)
    \*/

// ============================================
// 1. HEALTH CHECK
// ============================================

/\*\*

- Get server health status
-
- Request:
  \*/
  GET http://localhost:3000/health

// ============================================
// 2. SIGNUP - Create New User (Default Role: user)
// ============================================

/\*\*

- Register a new user with default role 'user'
-
- Request:
  \*/
  POST http://localhost:3000/auth/signup
  Content-Type: application/json

{
"username": "john_doe",
"password": "securePassword123"
}

/\*\*

- Expected Response (201 Created):
- {
- "success": true,
- "message": "User registered successfully",
- "user": {
-     "id": "1705318200000",
-     "username": "john_doe",
-     "role": "user",
-     "createdAt": "2024-01-15T10:30:00.000Z"
- }
- }
  \*/

// ============================================
// 2b. SIGNUP - Create Admin User
// ============================================

/\*\*

- Register a new user with admin role
-
- Request:
  \*/
  POST http://localhost:3000/auth/signup
  Content-Type: application/json

{
"username": "admin_user",
"password": "adminPassword123",
"role": "admin"
}

/\*\*

- Expected Response (201 Created):
- {
- "success": true,
- "message": "User registered successfully",
- "user": {
-     "id": "1705318200100",
-     "username": "admin_user",
-     "role": "admin",
-     "createdAt": "2024-01-15T10:30:00.000Z"
- }
- }
  \*/

// ============================================
// 3. LOGIN - Authenticate User
// ============================================

/\*\*

- Authenticate user with credentials
-
- Request:
  \*/
  POST http://localhost:3000/auth/login
  Content-Type: application/json

{
"username": "john_doe",
"password": "securePassword123"
}

/\*\*

- Expected Response (200 OK):
- {
- "success": true,
- "message": "Login successful",
- "token": "john_doe_1705318200000",
- "user": {
-     "id": "1705318200000",
-     "username": "john_doe",
-     "role": "user",
-     "createdAt": "2024-01-15T10:30:00.000Z"
- }
- }
  \*/

// ============================================
// 4. LOGIN - With Wrong Password
// ============================================

/\*\*

- Test error handling with incorrect password
-
- Request:
  \*/
  POST http://localhost:3000/auth/login
  Content-Type: application/json

{
"username": "john_doe",
"password": "wrongPassword"
}

/\*\*

- Expected Response (401 Unauthorized):
- {
- "success": false,
- "message": "Invalid credentials"
- }
  \*/

// ============================================
// 5. SIGNUP - Duplicate User
// ============================================

/\*\*

- Try to register with existing username
- (after first signup)
-
- Request:
  \*/
  POST http://localhost:3000/auth/signup
  Content-Type: application/json

{
"username": "john_doe",
"password": "anotherPassword456"
}

/\*\*

- Expected Response (409 Conflict):
- {
- "success": false,
- "message": "User already exists"
- }
  \*/

// ============================================
// 6. GET ALL USERS
// ============================================

/\*\*

- Retrieve list of all users (without passwords)
-
- Request:
  \*/
  GET http://localhost:3000/auth/users

/\*\*

- Expected Response (200 OK):
- {
- "success": true,
- "count": 2,
- "users": [
-     {
-       "id": "1705318200000",
-       "username": "john_doe",
-       "role": "user",
-       "createdAt": "2024-01-15T10:30:00.000Z"
-     },
-     {
-       "id": "1705318200100",
-       "username": "admin_user",
-       "role": "admin",
-       "createdAt": "2024-01-15T10:30:00.000Z"
-     }
- ]
- }
  \*/

// ============================================
// 7. SIGNUP - Password Too Short
// ============================================

/\*\*

- Test validation - password minimum 6 characters
-
- Request:
  \*/
  POST http://localhost:3000/auth/signup
  Content-Type: application/json

{
"username": "jane_smith",
"password": "short"
}

/\*\*

- Expected Response (400 Bad Request):
- {
- "success": false,
- "message": "Password must be at least 6 characters"
- }
  \*/

// ============================================
// 8. SIGNUP - Missing Fields
// ============================================

/\*\*

- Test validation - missing password
-
- Request:
  \*/
  POST http://localhost:3000/auth/signup
  Content-Type: application/json

{
"username": "jane_smith"
}

/\*\*

- Expected Response (400 Bad Request):
- {
- "success": false,
- "message": "Username and password are required"
- }
  \*/

// ============================================
// 9. SIGNUP - Invalid Role
// ============================================

/\*\*

- Test validation - invalid role
-
- Request:
  \*/
  POST http://localhost:3000/auth/signup
  Content-Type: application/json

{
"username": "jane_smith",
"password": "securePassword123",
"role": "superadmin"
}

/\*\*

- Expected Response (400 Bad Request):
- {
- "success": false,
- "message": "Invalid role. Allowed roles: user, admin"
- }
  \*/

// ============================================
// TESTING USING CURL
// ============================================

/\*\*

- 1.  Health Check:
- curl http://localhost:3000/health
-
- 2.  Signup:
- curl -X POST http://localhost:3000/auth/signup \
- -H "Content-Type: application/json" \
- -d '{"username":"john_doe","password":"securePassword123"}'
-
- 3.  Login:
- curl -X POST http://localhost:3000/auth/login \
- -H "Content-Type: application/json" \
- -d '{"username":"john_doe","password":"securePassword123"}'
-
- 4.  Get Users:
- curl http://localhost:3000/auth/users
-
- 5.  Wrong Password:
- curl -X POST http://localhost:3000/auth/login \
- -H "Content-Type: application/json" \
- -d '{"username":"john_doe","password":"wrongPassword"}'
  \*/
