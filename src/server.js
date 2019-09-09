'use strict';

const express = require('express');

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express();

app.get('/healthcheck', (req, res) => {
  console.log(`received healthcheck`);
  res.send("");
});

app.get('/*', (req, res) => {
  console.log(`processing: ${req.originalUrl}`);
  res.send("Hello from version 1");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
