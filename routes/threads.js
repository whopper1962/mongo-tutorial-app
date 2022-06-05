const express = require('express');
const app = express();
const Thread = require('../models/thread');

app.get('/', async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/', async (req, res) => {
  try {
    const newData = await Thread.create(req.body);
    res.status(200).json(newData);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;