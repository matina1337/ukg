const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Program = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true }, //long / short program
   		song: { type: String, required: true },
   },
    { timestamps: true },
)

module.exports = mongoose.model('programs', Program)