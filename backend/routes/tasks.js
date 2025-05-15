const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).send(task);
});

// Read All
router.get('/', async (req, res) => {
  const { status } = req.query;
  const tasks = status ? await Task.find({ status }) : await Task.find();
  res.send(tasks);
});

// Update
router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(task);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: 'Task deleted' });
});

module.exports = router;
