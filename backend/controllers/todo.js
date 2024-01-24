const Task = require("../models/task");

exports.getTasks = (req, res, next) => {
  Task.find()
    .lean()
    .then((data) => {
      res.json({ tasks: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createTask = (req, res, next) => {
  const taskTitle = req.body.title;
  const taskColor = req.body.color;
  const task = new Task({
    title: taskTitle.slice(0, 1).toUpperCase() + taskTitle.slice(1),
    color: taskColor,
  });
  task
    .save()
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ result: err });
    });
};
