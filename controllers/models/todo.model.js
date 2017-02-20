'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = Schema({
	todo: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);
