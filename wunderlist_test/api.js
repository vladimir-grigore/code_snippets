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
        .fail(function (err) {
          console.error('there was a problem', err);
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
        .fail(function (err) {
          console.error('there was a problem', err);
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
        .fail(function (err) {
          console.error('there was a problem', err);
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
        .fail(function (err) {
          console.error('there was a problem', err);
        });
  });

  router.patch('/list/update', (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request'});
      return;
    }

    var listID = parseInt(req.body.id);
    var listRevision = parseInt(req.body.revision);
    var updateData = {
      'title': `${req.body.name}`,
    };

    wunderlistAPI.http.lists.update(listID, listRevision, updateData)
        .done(function (list) {
          res.json(list);
        })
        .fail(function (err) {
          console.error('there was a problem', err);
        });
  });

  router.delete('/list/delete', (req, res) => {
    if (!req.body) {
      res.status(400).json({ error: 'invalid request'});
      return;
    }

    var listID = parseInt(req.body.id);
    var listRevision = parseInt(req.body.revision);

    wunderlistAPI.http.lists.deleteID(listID, listRevision)
        .done(function (list) {
          res.json(list);
        })
        .fail(function (err) {
          console.error('there was a problem', err);
        });
  });

  return router; 
}

