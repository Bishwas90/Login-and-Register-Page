const express = require('express');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

app.use(cookieParser());
app.use(csrfProtection);
app.use(bodyParser.json()); // Add JSON body parser

app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.post('/login', parseForm, csrfProtection, (req, res) => {
  // Handle login logic
  res.send('Login successful');
});

app.post('/register', parseForm, csrfProtection, (req, res) => {
  // Handle registration logic
  res.send('Registration successful');
});

app.use(express.static(path.join(__dirname, '../dist'))); // Serve the Vite build

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
