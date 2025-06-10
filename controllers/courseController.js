const Course = require('../models/Course');
const Note = require("../models/Note");

const uploadCourse = async (req, res) => {
  try {
    const { title, description, instructor, duration, price, imageUrl } = req.body;

    if (!title || !description || !instructor) {
      return res.status(400).json({ message: 'Title, description, and instructor are required for a course.' });
    }

    const newCourse = new Course({
      title,
      description,
      instructor,
      duration,
      price,
      imageUrl,
      // You might also add a 'createdBy' field linking to req.user._id here
    });

    await newCourse.save();
    res.status(201).json({ message: 'Course uploaded successfully', course: newCourse });
  } catch (error) {
    console.error('Error uploading course:', error);
    res.status(500).json({ message: 'Server error during course upload' });
  }
};

// POST /api/courses/:courseId/upload-note (Admin only)
const uploadNote = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, content, type, url } = req.body; // type could be 'pdf', 'video', 'text'

    if (!title || !content || !courseId) {
      return res.status(400).json({ message: 'Title, content, and courseId are required for a note.' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const newNote = new Note({
      title,
      content,
      course: courseId, // Link note to the course
      type,
      url,
      
    });

    await newNote.save();
    res.status(201).json({ message: 'Note uploaded successfully', note: newNote });
  } catch (error) {
    console.error('Error uploading note:', error);
    res.status(500).json({ message: 'Server error during note upload' });
  }
};

module.exports = {
  uploadCourse,
  uploadNote,
  
};