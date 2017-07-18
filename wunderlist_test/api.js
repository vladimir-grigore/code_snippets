require('dotenv').config();
var WunderlistSDK = require('wunderlist');
var wunderlistAPI = new WunderlistSDK({
  'accessToken': process.env.ACCESS_TOKEN,
  'clientID': process.env.CLIENT_ID
});

const express = require('express');
const router  = express.Router();

module.exports = () => {

  router.get('/lists', (req, res) => {
    wunderlistAPI.http.lists.all()
        .done(function (lists) {
          res.json(lists);
        })
        .fail(function () {
          console.error('there was a problem');
        });
  });

  router.get('/list/:id', (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request'});
      return;
    }

    wunderlistAPI.http.lists.getID(req.params.id)
        .done(function (list) {
          res.json(list);
        })
        .fail(function () {
          console.error('there was a problem');
        });
  });

  router.get('/list/:id', (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request'});
      return;
    }

    wunderlistAPI.http.lists.getID(req.params.id)
        .done(function (list) {
          res.json(list);
        })
        .fail(function () {
          console.error('there was a problem');
        });
  });
  
  
  router.post('/list/new', (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request'});
      return;
    }

    wunderlistAPI.http.lists.create({
          'title': `${req.body.name}`
        })
        .done(function (list) {
          res.json(list);
        })
        .fail(function () {
          console.error('there was a problem');
        });
  });

  return router; 
}

