const express = require('express');
const app = express();

const connectDb = require('./db/db');

const PORT = process.env.PORT || 8080;

connectDb();

app.get('/', (req, res) => {
  res.send('HI!');
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}! ✨⭐️🌈`);
});
