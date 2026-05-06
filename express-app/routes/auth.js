const express = require('express');
const { createUser, validateUser, getAllUsers } = require('../services/userService');

const router = express.Router();

/**
 * POST /signup
 * Register a new user
 *
 * Expected body:
 * {
 *   "username": "john_doe",
 *   "password": "securePassword123",
 *   "role": "user" (optional, default: "user", allowed: "user" or "admin")
 * }
 *
 * Response:
 * {
 *   "success": true,
 *   "message": "User registered successfully",
 *   "user": { "id": "...", "username": "john_doe", "role": "user", "createdAt": "..." }
 * }
 */
router.post('/signup', async (req, res, next) => {
  try {
    const { username, password, role = 'user' } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required',
      });
    }

    // Check password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters',
      });
    }

    // Validate role
    const validRoles = ['user', 'admin'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role. Allowed roles: user, admin',
      });
    }

    // Create the user with role
    const user = await createUser(username, password, role);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /login
 * Authenticate user and return a simple token
 *
 * Expected body:
 * {
 *   "username": "john_doe",
 *   "password": "securePassword123"
 * }
 *
 * Response (on success):
 * {
 *   "success": true,
 *   "message": "Login successful",
 *   "token": "jd_12345678",
 *   "user": { "id": "...", "username": "john_doe", ... }
 * }
 *
 * Response (on failure):
 * {
 *   "success": false,
 *   "message": "Invalid credentials"
 * }
 */
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required',
      });
    }

    // Validate user credentials
    const user = await validateUser(username, password);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Create a simple token (for learning purposes)
    // Format: username_timestamp
    const token = `${username}_${Date.now()}`;

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /users
 * Get all registered users (excluding passwords)
 * This is an optional protected route for demonstration
 *
 * Response:
 * {
 *   "success": true,
 *   "users": [
 *     { "id": "...", "username": "john_doe", "createdAt": "..." },
 *     ...
 *   ]
 * }
 */
router.get('/users', async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
