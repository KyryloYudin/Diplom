const {Schema, model} = require ('mongoose');
const ProfileSchema = require ('./profile-model')

const UserSchema= new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
})

module.exports = model('User', UserSchema);