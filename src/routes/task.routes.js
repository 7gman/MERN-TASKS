const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    console.log(task);
    res.json({"status": "Task found"});
});

router.post('/', async (req, res) => {
    const {title, description} = req.body;
    const task = new Task({title, description});
    console.log(task);
    await task.save();
    res.json({
        "status": "Task saved"
    });
})

router.put('/:id', async (req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    //console.log(req.params.id);
    res.json(`Task Updated`);
})

router.delete('/:id', async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({"Status": "Tarea Eliminada"});
})

module.exports = router;