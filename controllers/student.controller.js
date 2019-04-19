const Student = require('../models/student.model');
const Course = require('../models/course.model');

exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        // const result = await student.save().then(t =>
        //     Student.findById(student._id).populate('course_name')); // Pass new ID and then populate the "course_name"
        if (!result) res.send('something went wrong');
        console.log(result);
        res.send(result)
    } catch (e) {
        res.send(e);
    }
}

exports.getAllStudents = async (re, res) => {
    try {
        const students = await Student.find().populate('course_name'); //pass key name which we need to populate
        if (!students) res.send("No records found");
        res.send(students);
    } catch (e) {
        res.send(e)
    }

}