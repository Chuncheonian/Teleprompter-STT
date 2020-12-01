const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// const data = fs.readFileSync('./database.json');
// const conf = JSON.parse(data);
// const mysql = require('mysql');


const multer = require('multer');

// app.get('/api/customers', (req, res) => {
//     connection.query(
//         "SELECT * FROM course",
//         (err, rows, fields) => {
//             res.send(rows);
//         }
//     );
// });

// app.get('/api/customers/:id', (req, res) => {
//   let sql = 'SELECT * FROM course WHERE id=?';
//   let params = [req.params.id];
//   connection.query(sql, params,
//       (err, rows, fields) => {
//           res.send(rows);
//       }
//   );
// });
let scriptReceived = "";
app.get('/api/script', (req, res) => {
  res.send(
    scriptReceived
  )
});


app.post('/api/script', (req, res) => {
  scriptReceived = req.body.script;
});

app.listen(port, () => console.log(`Listening on port ${port}`));