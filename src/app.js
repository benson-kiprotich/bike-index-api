// Import required modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Create an Express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a route to fetch data from the external API
app.get('/api/data', async (req, res) => {
  try {
    // Make a GET request to the external API
    const response = await axios.get('https://bikeindex.org/api/v3/search');

    // Send the data obtained from the external API as the response
    res.json(response.data);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

const PORT = 3000;
app.listen(PORT);
