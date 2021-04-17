
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
	username: {type: String, default: 'matina_maha'},
    email: {type: String, trim: true, unique: true},
    country: {type: String, default: 'Thailand'},
    insta: {type: String, default: 'matina.maha'},
});

//Model

const userSchema = mongoose.model('users2', user);

module.exports = userSchema;