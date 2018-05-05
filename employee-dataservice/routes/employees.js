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

module.exports = router;
