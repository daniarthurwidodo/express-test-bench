const express = require('express');
const app = express();
const port = 3000;

// Root route returns JSON Hello World
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!', timestamp: new Date() });
});

// Route with parameter
app.get('/user/:id', (req, res) => {
  res.json({ userId: req.params.id, timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});