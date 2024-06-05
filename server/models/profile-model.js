

const { Schema, model } = require('mongoose');

const ProfileSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    email: { type: String, required: true },
    avatar: { type: String},
    userName: { type: String},
    course: { type: String},
    group: { type: String},
    faculty: { type: String},
    chair: { type: String},
    specialBlock: { type: String},
    special: { type: String},
    educationProgramm: { type: String},
    studyLevel: { type: String},
    studyForm: { type: String},
    cost: { type: String}
});

module.exports = model('Profile', ProfileSchema);