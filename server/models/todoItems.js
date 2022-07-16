// import mongoose to create new Schema

const mongoose = require('mongoose');

// create schema

const ToDoItemSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true
    }
});

// Export the Schema

module.exports = mongoose.model('todo', ToDoItemSchema);