// app.js
const express = require('express');
const memberRoutes = require('./routes/members');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/members', memberRoutes); // Use the member routes

app.listen(PORT, () => {
  console.log(`Gym API is running on http://localhost:${PORT}`);
});
