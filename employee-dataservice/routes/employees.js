var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/employees';

function getConnection() {
	console.log("Getting connection to db")
	var db_p = new Promise((resolve, reject) => {
		MongoClient.connect(url, function(err, client) {
			if (null != err) {
				conosole.log("Couldn't connect to db: ", err)
				reject();
			}
			resolve(client.db('employees'));
		})
	});
	return db_p;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
	getConnection().then(db => {
		db.collection('employees').find().toArray().then(employees => {
			res.json(employees)
		})
	}).catch(err => {
		console.log(err)
	});
});

router.post('/add', function(req, res) {
	getConnection().then(db => {
		res.setHeader('Content-Type', 'text/plain')
		req.body.employee.id = parseInt(req.body.employee.id);
		db.collection('employees').insertOne(req.body.employee).then(result => {
			res.send({ result: "success" });
		}).catch(err => {
			console.log(err);
			res.send({ result: "failure" })
		})
	})
});

router.post('/update', function(req, res) {
	getConnection().then(db => {
		console.log(req.body.employee)
		res.setHeader('Content-Type', 'text/plain');
		req.body.employee.id = parseInt(req.body.employee.id);
		db.collection('employees').update(
			{ id: req.body.employee.id },
			req.body.employee
		).then(result => {
			res.send({ result: "success" });
		}).catch(err => {
			console.log(err);
			res.send({ result: "failure" })
		})
	})
});

router.post('/byId', function(req, res, next) {
	getConnection().then(db => {
		db.collection('employees').findOne({id: parseInt(req.body.id)}).then(result => {
			res.json(result)
		})
	})
});

module.exports = router;
