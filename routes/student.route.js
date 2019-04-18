const express = require('express');
const router = express.Router();
const student = require('../controllers/student.controller');


router.post('/create-student', student.createStudent);
router.get('/', student.getAllStudents);
module.exports = router;