const Courses = require('../models/course.model');

exports.createCourse = async (req, res) => {
    const course = new Courses(req.body);
    const result = await course.save();
    if (!result) res.send('Something went wrong');
    res.send(result);
}

exports.allCourse = async (req, res) => {
    try {
        const courses = await Courses.find();
        res.send(courses);
    } catch (e) {
        res.send(e)
    }
}
exports.courseByID = async (req, res) => {
    try {
        const course = await Courses.findById(req.params.id);
        res.send(course);
    } catch (e) {
        res.send(e);
    }
}
exports.update_course = async (req, res) => {
    try {
        const course = await Courses.findById(req.params.id);
        if (!course) res.send('No course found').status(404);
        course.set({
            author: 'Mallikarjun',
        });
        const result = await course.save();
        res.send(result);
    } catch {
        res.send(e);
    }
}
exports.updateCourseByID = async (req, res) => {
    try {
        const course = await Courses.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        });
        if (!course) res.send('No course found').status(404);
        const result = await course.save();
        res.send(result);
    } catch {
        res.send(e);
    }
}
exports.deleteCourseByID = async (req, res) => {
    try {
        const course = await Courses.findOneAndDelete(req.body.id);
        if (!course) res.send('No course -Found');
        res.send('Delete successfully');
    } catch (e) {
        res.send(e)
    }
}
