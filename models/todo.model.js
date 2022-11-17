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
    type: "string",
    required: true,
  },
  userId: {
    type: "string",
  },
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {
  TodoModel,
};
