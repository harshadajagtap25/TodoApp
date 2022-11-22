const { Router } = require("express");
const { TodoModel } = require("../models/todo.model.js");
const todoController = Router();

//http://localhost:8080/todo
todoController.get("/", async (req, res) => {
  const result = await TodoModel.find({ userId: req.body.userId });
  //only get logged in users todos
  res.status(200).send({ data: result });
});

// http://localhost:8080/todo/create
todoController.post("/create", async (req, res) => {
  const payload = req.body;
  const newTodo = await TodoModel(payload);
  await newTodo.save();
  res.status(201).send({ msg: "Todo created successfully" });
});

// http://localhost:8080/todo/todoid
todoController.patch("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;

  await TodoModel.findByIdAndUpdate(
    { _id: todoId },
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      category: req.body.category,
    }
  );

  const result = await TodoModel.findOne({ _id: todoId });

  res.status(200).send({
    msg: "Todo Updated successfully",
    updatedTodo: result,
  });
});

// http://localhost:8080/todo/todoid
todoController.delete("/:todoId", async (req, res) => {
  const todoId = req.params.todoId;

  const result = await TodoModel.findOneAndDelete({ _id: todoId });
  res.status(200).send({
    msg: "Todo Deleted successfully",
    title: result.title,
  });
});

module.exports = {
  todoController,
};
