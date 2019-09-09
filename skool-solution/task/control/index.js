const { Task } = require("../model");

// Create new tas
exports.createTask = async (req, res) => {
  const { userType } = req.params;
  const { user: { _id } } = req
  const task = req.body.data;
  const createdBy = _id;
  // if (userType !== "admin" || userType !== "teacher" || userType !== "accountant") return res.status(400).json({ error: "You must be an admin, teacher or an accountant to perform this operation" });
  // if (!task) return res.status(400).json({ error: "Operation failed. No data provided to create a task" });
  let tasks = new Task({
    task: task,
    createdBy: createdBy
  });
  return await tasks.save((err, data) => {
    if (err || !data) return res.status(400).json({
      error: "Create operation failed. Please try again"
    });
    res.json(data);
  });
}

// Gets all task
exports.fetchTasks = (req, res) => {
  const { userId } = req.params;
  Task.find({ createdBy: userId })
    .populate("createdBy", "name email username")
    .then(task => {
      if (!task) return res.status(400).json({ error: "Can not fetch task. Try again."});
      res.json(task);
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
}

// Mark a task as complete task
exports.completeTask = (req, res) => {
  const { taskId, userType } = req.params;
  
  if (taskId === null || taskId === undefined) return res.status(400).json({ error: "Task ID is required to complete this operation"});

  Task.findByIdAndUpdate(taskId, { $set: { complete: true } }, { new: true})
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      console.log(err.message)
      res.status(400).json(err.message);
    });
}

// Delete task
exports.deleteTask = (req, res) => {
  const { taskId } = req.params
  const { userType } = req;

  if (!taskId) return res.status(400).json({ error: "Task ID is required to complete this operation" });

  Task.findOneAndDelete(taskId)
    .then(result => {
      if (!result) return res.status(400).json({ error: "Can not delete task" });
      res.json("Task deleted successfully");
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
}