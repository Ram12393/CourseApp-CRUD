const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router.get('/', courseController.course_details);
// router.get('/:id', courseController.single_course);
router.get('/:id', courseController.update_course);
router.post('/:id', courseController.update_course_dynamic);
module.exports = router;