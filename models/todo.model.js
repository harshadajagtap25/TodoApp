const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  status: {
    type: "string",
    required: true,
  },
  category: {
    type: "Array",
    required: true,
  },
  userId: {
    type: "string",
  },
  startDate: {
    type: "string",
    required: true,
  },
  endDate: {
    type: "string",
    required: true,
  },
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {
  TodoModel,
};
