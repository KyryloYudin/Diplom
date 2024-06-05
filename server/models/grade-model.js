const {Schema, model} = require ('mongoose');

const gradeSchema= new Schema({
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }, // Ссылка на профиль
    userName: { type: String, required: true },
    semestr: {type: String},
    nameLesson: { type: String},
    nameTeacher: {type: String},
    Contact: {type: String},
    ez: {type: String},
    grade: {type: String},
    nation: {type: String},
    ects: {type: String},
});

module.exports = model('Grade', gradeSchema);