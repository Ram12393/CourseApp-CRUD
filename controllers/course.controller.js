const Courses = require('../models/course.model');

exports.course_details = async (req, res) => {
    try {
        const courses = await Courses.find();
        res.send(courses);
    } catch (e) {
        res.send(e)
    }
}
exports.single_course = async (req, res) => {
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
exports.update_course_dynamic = async (req, res) => {
    try {
        console.log(req.body);
        // const course = await Courses.findById(req.params.id);
        // if (!course) res.send('No course found').status(404);
        // console.log(req.params);
        // res.send(req.params);
        // return
        // course.set({
        //     author: req.body.author,
        // });
        // const result = await course.save();
        // res.send(result);
    } catch {
        res.send(e);
    }
}