const express = require('express');
const app = express();
const authRoute = require('./routes/auth.route');
const boardRoute = require('./routes/board.route');
const taskRoute = require('./routes/task.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoute);
app.use('/boards', boardRoute);
app.use('/tasks', taskRoute);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});