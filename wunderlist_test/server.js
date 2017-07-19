var express = require('express');
var PORT = 3000;
var app = express();
const api_routes  = require("./api");
const bodyParser  = require("body-parser");

//Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/lists', (req, res) => {
  res.render('lists');
});

app.get('/tasks', (req, res) => {
  res.render('tasks');
});

// API routes
app.use("/api", api_routes());

//Open port 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
