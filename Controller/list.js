const mongoose = require('mongoose')
const List = require('../Models/List')
const Todo = require('../Models/Todo')
exports.add = async(req, res) => {
    const { name } = req.body
    const userId = mongoose.Types.ObjectId(req.body.userId);
    try {
        const newList = new List({
            name,
            userId
        })
        const list = await newList.save()
        if (list)
            return res.json({
                error: null,
                list
            })
        return res.json({
            error: 'Can\'t save List item'
        })
    } catch (err) {
        console.log('/addlist:Err:-', err)
        return res.json({
            error: 'Server Crashed'
        })
    }
}

exports.del = async(req, res) => {
    const listid = mongoose.Types.ObjectId(req.body.listid);
    try {
        const res1 = await Todo.deleteMany({ listId: listid });
        if (res1.ok) {
            const res2 = await List.deleteOne({ _id: listid });
            if (res2.ok)
                return res.json({
                    error: null
                })
        }
        return res.json({
            error: 'Something went wrong'
        })

    } catch (err) {
        console.log('/deletelist:Err:-', err);
        return res.json({
            error: 'Server crashed'
        })
    }
}

exports.getlist = async(req, res) => {
    try {
        const { userId } = req.body;
        const lists = await List.find({ userId });
        return res.json({
            error: null,
            lists
        })
    } catch (err) {
        console.log('/getlist:Err:-', err);
        return res.json({
            error: 'Server crashed'
        })
    }
}