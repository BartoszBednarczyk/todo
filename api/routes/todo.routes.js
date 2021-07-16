module.exports = app => {
    const todo = require("../controllers/todo.controller.js")

    var router = require("express").Router();

    // Retrieve all Todos
    router.get("/", todo.findAll)

    app.use("/api/todo", router)
}