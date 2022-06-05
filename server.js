const express = require('express');
const app = express();
const mongoose = require('mongoose');

const threadRoutes = require('./routes//threads');

require('dotenv').config();

const PORT = 3000;

app.use(express.json());

mongoose.connect(`mongodb+srv://whopper1962:${process.env.DB_PASSWORD}@cluster0.iqtapcw.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('Database connected!');
})
.catch((err) => {
  console.log(err);
});

app.use(express.static('public'));

app.use('/api/v1/threads', threadRoutes);

app.listen(PORT, (req, res) => {
  console.log('Server running...');
});