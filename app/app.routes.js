'use strict';

// const express = require('express');
// const router = express.Router();

module.exports = (app) => {

	const routeCntrl = require('../controllers/routes/routes.controller');

	app.route('/')
		.get(routeCntrl.getTodo)
		.post(routeCntrl.postTodo)
		.delete(routeCntrl.deleteTodo);

	app.route('/todos')
		.get(routeCntrl.findTodo)
}

// module.exports = router;
