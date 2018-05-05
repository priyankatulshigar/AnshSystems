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

getConnection().then(db => {
	db.collection('employees').remove({}).then(() => {
		db.collection('employees').insertMany([
	  	{
	  		"id": 1,
	  	    "name": "Jhon",
	  		"phone": "9999999999",
	  		"address": {
	  			"city": "Pune",
	  			"address_line1":"ABC road",
	  			"address_line2":"XYZ building",
	  			"postal_code":"12455"
	  		}
	  	},
	  	{
	  		"id": 2,
	  		"name": "Jacob",
	  		"phone": "AZ99A99PQ9",
	  		"address": {
	  			"city": "Pune",
	  			"address_line1":"PQR road",
	  			"address_line2":"ABC building",
	  			"postal_code":"13455"
	  		}
	  	},
	  	{
	  		"id": 3,
	  		"name": "Ari",
	  		"phone": "145458522",
	  		"address": {
	  			"city": "Mumbai",
	  			"address_line1":"ABC road",
	  			"address_line2":"XYZ building",
	  			"postal_code":"12455"
	  		}
	  	}
	]).then(() => {
		console.log('Added dummy records to db')
	});
	})

}).catch(err => {
	console.log('Could not connect to mongodb', err);
})
