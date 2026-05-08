const express = require('express');
const router = express.Router();

// GET /weather
// Public endpoint that returns dummy weather data
router.get('/', (req, res) => {
  const sample = {
    location: 'Example City',
    temperatureC: 21,
    temperatureF: 69.8,
    description: 'Partly cloudy',
    humidity: 60,
    windKph: 13,
    forecast: [
      { day: 'Tomorrow', highC: 23, lowC: 16, description: 'Sunny' },
      { day: 'Day After', highC: 20, lowC: 14, description: 'Light rain' }
    ],
    timestamp: new Date().toISOString()
  };

  res.json({ success: true, data: sample });
});

module.exports = router;
