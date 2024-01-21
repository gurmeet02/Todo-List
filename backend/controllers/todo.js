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
  const task = new Task({
    title: taskTitle,
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
