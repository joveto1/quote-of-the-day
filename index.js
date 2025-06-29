const express = require('express');
const app = express();
const port = 3000;

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated."
];

app.use(express.static('public'));

app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(port, () => {
  console.log(`Quote of the Day app listening at http://localhost:${port}`);
});
