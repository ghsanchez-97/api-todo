'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AgendSchema = Schema({

    name: String,
    privilege: String,
    datecreat: Date,
	dataedit: Date,
	datedel: Date,
	personcreat: String,
	personedit: String,
	persondel: String
});

module.exports = mongoose.model('agent', AgendSchema);