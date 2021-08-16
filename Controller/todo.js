const mongoose = require('mongoose')
const Todo = require('../Models/Todo')

exports.add = async(req, res) => {
    const { todotext } = req.body;
    const userId = mongoose.Types.ObjectId(req.bodyuserId);
    const listId = mongoose.Types.ObjectId(req.bodylistId);
    const newTodo = new Todo({
        todotext,
        userId,
        listId
    });
    try {
        const todo = await newTodo.save();
        if (todo)
            return res.json({
                error: null,
                todo
            })
        return res.json({
            error: 'Can\'t save todo item'
        })
    } catch (err) {
        console.log('/addtodo:Err:-', err);
        return res.json({
            error: 'Server crashed'
        })
    }
}

exports.complete = async(req, res) => {
    const todoid = mongoose.Types.ObjectId(req.body.todoid);
    const { curstatus } = req.body;
    try {
        const res = await Todo.updateOne({ _id: todoid }, { completed: !curstatus })
        if (res.nModified)
            return res.json({
                error: null
            })
        return res.json({
            error: 'not modified'
        })
    } catch (err) {
        console.log('/deletetodo:Err:-', err);
        return res.json({
            error: 'Server crashed'
        })
    }
}

exports.del = async(req, res) => {
    const todoid = mongoose.Types.ObjectId(req.body.todoid);
    try {
        const res = await Todo.deleteOne({ _id: todoid });
        if (res.ok)
            return res.json({
                error: null
            })
        return res.json({
            error: 'Something went worng Nothing gets deleted'
        })
    } catch (err) {
        console.log('/deletetodo:Err:-', err);
        return res.json({
            error: 'Server crashed'
        })
    }
}


exports.gettodo = async(req, res) => {
    try {
        const listid = mongoose.Types.ObjectId(req.body.listId);
        const todos = await Todo.find({ listId: listid });
        return res.json({
            error: null,
            todos
        })
    } catch (err) {
        console.log('/gettodo:Err:-', err);
        return res.json({
            error: 'Server crashed'
        })
    }
}