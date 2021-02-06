'use strict'

let mogoose = require('mongoose');
let Schema = mogoose.Schema;

let UserSchema = Schema({
    firstname: String,
	middlename: String,
	firstlastname: String,
	middlelastname: String,	
	email: String,
	password: String,
	rol: String,
	datecreat: Date,
	dataedit: Date,
	datedel: Date,
	personcreat: String,
	personedit: String,
	persondel: String
});

module.exports = mogoose.model('user', UserSchema);