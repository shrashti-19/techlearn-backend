const mongoose = require('mongoose');

const progressScehma = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required:true
    },
    completedChapters: [
        {
            type: String
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model('Progress',progressScehma);