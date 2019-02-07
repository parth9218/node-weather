const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000;

app.use('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})