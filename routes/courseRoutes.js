const express = require('express');
const Course = require('../models/Course');
const Note = require('../models/Note');
const router = express.Router();
const {protect} = require("../middleware/authMiddleware");
const {admin} = require("../middleware/adminMiddleware");
const {uploadCourse, uploadNote} = require("../controllers/courseController");

router.get('/',async(req,res)=>{
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(err){
        res.status(500).json({error: 'Server error'});
    }
});


router.get('/:id/notes',async(req,res)=>{
    try{
        const notes = await Note.find({course:req.params.id});
        res.json(notes);
    }catch(err){
        res.status(500).json({error: 'Server error'});
    }
});

router.post('/upload-course',protect,admin, uploadCourse);
router.post('/:courseId/upload-note',protect,admin,uploadNote);


module.exports = router;