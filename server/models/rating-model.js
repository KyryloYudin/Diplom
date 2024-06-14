const { Schema, model } = require('mongoose');

const RatingSchema = new Schema({
    year: { type: Number, required: true },
    specialBlock: { type: String, required: true },
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
    semester: { type: Number, required: true }  // Добавляем поле семестра
});

module.exports = model('Rating', RatingSchema);
