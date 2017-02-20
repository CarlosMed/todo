'use strict';

const Todo = require('../models/todo.model');

const getTodo = (req, res) => {
	Todo.find({}, (err, data) => {
		if (err) console.log(err);

		res.render(`index`, { message: 'Todo', todos: data });
	});
};

const postTodo = (req, res) => {
	let newTodo = new Todo(req.body);

	newTodo.save((err, data) => {
		if (err) console.log(err);
		console.log({ Added: data });
	});;
};


const findTodo = (req, res) => {
	Todo.find({}, (err, data) => {
		if (err) console.log(err);

		res.json(data);
	});
};

const deleteTodo = (req, res) => {
	Todo.remove({ _id: req.query.id }, (err, data) => {
		if (err) console.log(err);

		res.json({ 'Successfully deleted': data });
	})
};

module.exports = { getTodo, postTodo, findTodo, deleteTodo };
