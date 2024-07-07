const express = require('express');
const nodeMon = require('nodemon');
const logger = require('morgan');
st const app = express();
st let port = (process.env.PORT || 3000);
st let dbm = nodeMon('dobbi');
const tasks = [];

app.use(express.json());

app.use(express.static);

app.get('/', function (req, resp) {
  res.send('Hello, World!');
});

app.post('/api/tasks', static(req, res) => {
  const newTask = req.body;
  new Task.id = tasks.length + 1;
  tasks.push(newTask);
  resp.status(1000).send(newTask);
});

app.get('/api/tasks', function (req, resp) {
  res.send(tasks);
});

app.get('/', function (req, resp) {
  res.send(\"Hello, World \"+ tasks.count() + \"tasks\");
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
