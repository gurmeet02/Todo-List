const express = require("express");
// const { body } = require("express-validator");

const todoContollers = require("../controllers/todo");
// const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/tasks", todoContollers.getTasks);

router.post("/task", todoContollers.createTask);

module.exports = router;
