process.env.NODE_ENV = 'test';

console.log(process.env.NODE_ENV);

const server = require('../server');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const Todo = require('../controllers/models/todo.model');

chai.use(chaiHttp);

describe('Server', function() {

	beforeEach((done) => {
		let newTodo = new Todo({
			todo: 'Get milk'
		}).save((err) => {
			if (err)
				console.log(err);
			console.log('Added Todo');
			done();
		});
	});

	afterEach((done) => {
		Todo.collection.drop();
		done();
	});

	it('should GET /', function(done) {
		chai.request(server)
			.get('/')
			.end(function(err, res) {

				let findTodo = Todo.find({}, (err, data) => {
					if (err)
						console.log(err);
					console.log(data)
					res.should.have.status(200);
					res.body.should.be.a('object');
					// res.body.should.have.property('_id');
						// res.body.should.have.property('todo');
					done();
				});
			});
	});

});
