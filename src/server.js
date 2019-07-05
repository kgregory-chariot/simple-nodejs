'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  console.log(`received request from ${req.ip}`);
  res.send("Hello, visitor from " + req.ip + ", there's not much to see here\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
