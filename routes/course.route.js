const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router.get('/', courseController.allCourse);
router.post('/create', courseController.createCourse);
router.get('/:id', courseController.courseByID);
router.put('/update/:id', courseController.updateCourseByID);
router.delete('/delete/:id', courseController.deleteCourseByID);
module.exports = router;