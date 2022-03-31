let mysql = require('mysql');

// Connection Object
const Connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'chirpruser',
	password: 'password1',
	database: 'chirpr',
});

// Test Connection
Connection.connect(function (err) {
	if (err) throw err;
	console.log('Connected to the MySQL server!');
});

const Query = (query, values) => {

	return new Promise((resolve, reject) => {
		Connection.query(query, values, (err, results) => {
			if (err) return reject(err);
			return resolve(results);
		});
	});

};

module.exports.default = Query;