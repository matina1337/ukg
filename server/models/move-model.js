
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const move = new Schema({
	program_id: {type: String, default: '1'},
	name: {type: String, default: 'Move'},
    type: {type: String, default: 'Jump'}, // type of move: for now jump, spin, choreo
    jump: {type: String, default: ''}, // type of jump
    rev: {type: Number, default: 0}, //jump revolutions
    min: {type: Number, default: 0}, //min
    sec: {type: Number, default: 0} //seconds
});

//Model

const userSchema = mongoose.model('moves', move);

module.exports = move;