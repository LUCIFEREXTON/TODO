const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todotext: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    listId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "List"
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', TodoSchema);