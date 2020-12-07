const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let scriptReceived = "";

app.get('/api/:script', (req, res) => {
  res.send(
    scriptReceived
  )
});

app.post('/api/:script', (req, res) => {
  scriptReceived = req.body.script;
});

app.listen(port, () => console.log(`Listening on port ${port}`));