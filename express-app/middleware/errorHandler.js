/**
 * Error handling middleware
 * Catches and responds to errors with appropriate status codes
 */
function errorHandler(err, req, res, next) {
  console.error(`[Error] ${err.message}`);

  // Check for specific error types
  if (err.message.includes('already exists')) {
    return res.status(409).json({
      success: false,
      message: err.message,
    });
  }

  if (err.message.includes('Invalid credentials')) {
    return res.status(401).json({
      success: false,
      message: err.message,
    });
  }

  // Generic error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
}

module.exports = errorHandler;
