const Student = require('../models/student.model');

exports.createStudent = async (req, res) => {
    const student = new Student(req.body);
    const result = await student.save();
    if (!result) res.send('something went wrong');
    res.send(result)
}