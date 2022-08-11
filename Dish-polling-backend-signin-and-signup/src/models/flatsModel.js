const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    block: { type: String, required: true },
    number: { type: Number, required: true },
    resident:[{name:{type: String, required: true},gender:{ type: String, required: true },age:{type: Number, required: true}}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Flat = mongoose.model('flat', flatSchema);
module.exports = Flat;
