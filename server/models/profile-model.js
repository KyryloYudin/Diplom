const { Schema, model } = require('mongoose');

const ProfileSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', require: true },
    email: { type: String},
    avatar: { type: String},
    userName: { type: String},
    course: { type: String},
    group: { type: String},
    faculty: { type: String},
    chair: { type: String},
    specialBlock: { type: String},
    special: { type: String},
    educatianProgramm: { type: String},
    studyLevel: { type: String},
    studyForm: { type: String},
    cost: { type: String}
});

module.exports = model('Profile', ProfileSchema);