const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Animal names data
const animals = ["Lion", "Elephant", "Giraffe", "Tiger", "Monkey", "Zebra", "Kangaroo", "Penguin", "Bear", "Hippo"];

// API endpoint to fetch animal names
app.get('/api/animals', (req, res) => {
  res.json({ animals: animals });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
