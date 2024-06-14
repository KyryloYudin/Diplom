const {Schema, model} = require ('mongoose');

const GroupSchema= new Schema({
  groupName: { type: String, required: true },
  profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }] // Используйте тип ObjectId для ссылок на профили
});

module.exports = model('Group', GroupSchema);