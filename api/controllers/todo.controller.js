const db = require("../models");
const Todo = db.todo;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    console.log("TEST")
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i"}} : {};

  Todo.find(condition).then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message:
          err.message || "Some error occured"
      })
  })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};