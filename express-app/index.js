const express = require('express');
const loggingMiddleware = require('./middleware/logging');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARE SETUP
// ============================================

// Built-in middleware to parse JSON request bodies
app.use(express.json());

// Custom logging middleware
app.use(loggingMiddleware);

// CORS middleware to allow requests from the frontend
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// ============================================
// ROUTES
// ============================================

// Health check endpoint (no auth required)
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Authentication routes
app.use('/auth', authRoutes);

// Weather endpoint (no auth required)
app.use('/weather', weatherRoutes);

// ============================================
// ERROR HANDLING
// ============================================

// Error handling middleware (must be last)
app.use(errorHandler);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  Express Auth Server Running           ║
║  Port: ${PORT}                         ║
║  Environment: ${process.env.NODE_ENV || 'development'}      ║
╚════════════════════════════════════════╝

Available Endpoints:
- GET  /health           (health check)
- POST /auth/signup      (register new user)
- POST /auth/login       (authenticate user)
- GET  /auth/users       (list all users)
- GET  /weather          (dummy weather data)

Data Storage: users.json (JSON file)
  `);
});

module.exports = app;
