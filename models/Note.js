const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    course:{
         type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true
    },
    title:{
        type:String,
        required:true
    },
    content:String
}, {timestamps: true});

module.exports = mongoose.model('Note',noteSchema);