const {Schema, model} = require ('mongoose');

const GroupSchema= new Schema({
    groupName: { type: String, required: true, unique: true },
    profiles: [{
        profileId: { type: Schema.Types.ObjectId, ref: 'Profile' },
        userName: { type: String }
      }],
    mainTeacher: { type: String}
});

module.exports = model('Group', GroupSchema);