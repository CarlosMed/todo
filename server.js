'use strict';

const path = require('path');
const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/_config');
const routes = require('./app/app.routes');

const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DB || config.mongoURI[app.settings.env];

mongoose.Promise = global.Promise;

mongoose.connect(db, (err, res) => {
	if (err)
		console.log(err)
	console.log('Mongoose connected: ' + app.settings.env);
});

if (process.env.NODE_ENV !== 'test') {
	app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

routes(app)

app.set('view engine', 'ejs');

app.listen(port, () => 	console.log(`Server running on http://localhost:${port}`));

module.exports = app;