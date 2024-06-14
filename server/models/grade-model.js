const {Schema, model} = require ('mongoose');

const gradeSchema= new Schema({
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }, // Ссылка на профиль
    userName: { type: String, required: true },
    semestr: {type: String},
    nameLesson: { type: String},
    nameTeacher: {type: String},
    contact: {type: String},
    ez: {type: String},
    grade: {type: Number},
    nation: {type: String},
    ects: {type: String},
    credit: {type: Number}
});

gradeSchema.pre('save', function(next) {
    if (this.grade !== undefined) {
        // Расчет значения nation
        if (this.grade >= 90) {
            this.ects = 'A';
        } else if (this.grade >= 80) {
            this.ects = 'B';
        } else if (this.grade >= 70) {
            this.ects = 'C';
        } else if (this.grade >= 60) {
            this.ects = 'D';
        } else if (this.grade >= 50) {
            this.ects = 'E';
        } else {
            this.ects = 'F';
        }

        // Расчет значения ects
        if (this.grade >= 90) {
            this.nation = '5';
        } else if (this.grade >= 75) {
            this.nation = '4';
        } else if (this.grade >= 60) {
            this.nation = '3';
        } else if (this.grade >= 50) {
            this.nation = '2';
        } else {
            this.nation = '1';
        }
    }
    next();
});

module.exports = model('Grade', gradeSchema);