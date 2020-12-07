const fs = require('fs');
const path = require("path");
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

app.use(express.static(path.join(__dirname, './client/build')));  // 정적파일로 바꿔진 React[front-end]를 Express 서버로만 이용할 수 있도록 해줌

app.get('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));