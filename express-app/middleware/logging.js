/**
 * Simple logging middleware
 * Logs HTTP method, URL, and response status
 */
function loggingMiddleware(req, res, next) {
  // Log the incoming request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Store original res.send method
  const originalSend = res.send;

  // Override res.send to log response status
  res.send = function (data) {
    console.log(`[${new Date().toISOString()}] Response Status: ${res.statusCode}`);
    originalSend.call(this, data);
  };

  next();
}

module.exports = loggingMiddleware;
