const fs = require('fs').promises;
const path = require('path');
const { hashPassword, comparePassword } = require('../utils/hash');

// Path to the users.json file for persistent storage
const USERS_FILE = path.join(__dirname, '../users.json');

/**
 * Initialize users storage by reading from file
 * @returns {Promise<Array>} Array of users from file
 */
async function loadUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist or is invalid, return empty array
    return [];
  }
}

/**
 * Save users to file
 * @param {Array} users - Array of users to save
 * @returns {Promise<void>}
 */
async function saveUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
}

/**
 * Find a user by username
 * @param {string} username - Username to search for
 * @returns {Promise<Object|null>} User object or null if not found
 */
async function findUserByUsername(username) {
  const users = await loadUsers();
  return users.find((user) => user.username === username) || null;
}

/**
 * Create a new user
 * @param {string} username - Username for new user
 * @param {string} password - Plain text password to hash
 * @param {string} role - User role: 'user' (default) or 'admin'
 * @returns {Promise<Object>} Newly created user object (without password)
 * @throws {Error} If user already exists
 */
async function createUser(username, password, role = 'user') {
  // Validate role
  const validRoles = ['user', 'admin'];
  if (!validRoles.includes(role)) {
    throw new Error('Invalid role. Allowed roles: user, admin');
  }

  // Check if user already exists
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash the password
  const hashedPassword = await hashPassword(password);

  // Create new user object with role
  const newUser = {
    id: Date.now().toString(), // Simple ID generation
    username,
    password: hashedPassword,
    role,
    createdAt: new Date().toISOString(),
  };

  // Load users, add new user, and save
  const users = await loadUsers();
  users.push(newUser);
  await saveUsers(users);

  // Return user without password
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
}

/**
 * Validate user credentials (login)
 * @param {string} username - Username to validate
 * @param {string} password - Plain text password to check
 * @returns {Promise<Object|null>} User object (without password) if valid, null otherwise
 */
async function validateUser(username, password) {
  const user = await findUserByUsername(username);
  if (!user) {
    return null;
  }

  // Compare provided password with stored hashed password
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    return null;
  }

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

/**
 * Get all users (without passwords)
 * @returns {Promise<Array>} Array of users without passwords
 */
async function getAllUsers() {
  const users = await loadUsers();
  // Remove passwords from all users
  return users.map((user) => {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
}

module.exports = {
  createUser,
  validateUser,
  findUserByUsername,
  getAllUsers,
  loadUsers,
  saveUsers,
};
