require('dotenv').config();
var express = require('express');
var PORT = 3000;

var WunderlistSDK = require('wunderlist');
var wunderlistAPI = new WunderlistSDK({
  'accessToken': process.env.ACCESS_TOKEN,
  'clientID': process.env.CLIENT_ID
});

var app = express();

//Configuration
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  wunderlistAPI.http.lists.all()
    .done(function (lists) {
       res.json(lists);
      /* do stuff */
    })
    .fail(function () {
      console.error('there was a problem');
    });
});

//Open port 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
