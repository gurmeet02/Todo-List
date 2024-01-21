const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // color: {
  //   type: String,
  //   required: false
  // },
});

module.exports = mongoose.model("Task", taskSchema);
