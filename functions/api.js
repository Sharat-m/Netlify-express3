const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let records = [];

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/key', (req, res) => {
  res.json([
    {
      "x_api_key": "fa12345678912345678912345678985"
    }
  ]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
