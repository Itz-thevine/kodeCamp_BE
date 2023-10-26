const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    teacher: {
        type: String,
        required : false
    },
    noOfStudents: {
        type: Number,
        required: false
    }
})

const testDb = mongoose.model('Subjects', subjectSchema);

module.exports = {
    testDb
}