const express = require('express');
const app = express();
const authRoute = require('./routes/auth.route');
const boardRoute = require('./routes/board.route');
const taskRoute = require('./routes/task.route');

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up database connection (e.g., MongoDB)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taskly');
app.use('/auth', authRoute);
app.use('/boards', boardRoute);
app.use('/tasks', taskRoute);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});