const router = require('express').Router();
const database = include('databaseConnection');
const dbModel = include('databaseAccessLayer');
//const dbModel = include('staticData');

router.get('/', (req, res) => {
	console.log("page hit");
	database.getConnection(function (err, dbConnection) {
		if (err) {
			res.render('error', {message: 'Error connecting to MySQL'});
			console.log("Error connecting to mysql");
			console.log(err);
		}
		else {
			
			dbModel.getAllRestaurants((err, result) => {
				if (err) {
					res.render('error', {message: 'Error reading from MySQL'});
					console.log("Error reading from mysql");
					console.log(err);
				}
				else { //success
					res.render('index', {AllRestaurants: result});

					//Output the results of the query to the Heroku Logs
					console.log(result);
				}
			});
			dbConnection.release();
		}
	});

});

router.post('/addPerson', (req, res) => {
	console.log("form submit");
	database.getConnection(function (err, dbConnection) {
		if (err) {
			res.render('error', {message: 'Error connecting to MySQL'});
			console.log("Error connecting to mysql");
			console.log(err);
		}
		else {
			console.log(req.body); 
			dbModel.addPerson(req.body, (err, result) => {
				if (err) {
					res.render('error', {message: 'Error writing to MySQL'});
					console.log("Error writing to mysql");
					console.log(err);
				}
				else { //success
					res.redirect("/");

					//Output the results of the query to the Heroku Logs
					console.log(result);
				}
			});
			
			dbConnection.release();
		}
	});

});

// router.get('/deletePerson', (req, res) => {
// 	console.log("delete person");
// 	database.getConnection(function (err, dbConnection) {
// 		if (err) {
// 			res.render('error', {message: 'Error connecting to MySQL'});
// 			console.log("Error connecting to mysql");
// 			console.log(err);
// 		}
// 		else {
// 			console.log(req.query);

// 			let personId = req.query.id;
// 			if (personId) {
// 				//delete from person_skill where person_id = :person_id;
// 				dbModel.deletePersonSkill(personId, (err, result) => {
// 					if (err) {
// 						res.render('error', {message: 'Error writing to MySQL'});
// 						console.log("Error writing to mysql");
// 						console.log(err);
// 					}
// 					else { //success
// 						//delete from person where person_id = :person_id;
// 						dbModel.deletePerson(personId, (err, result) => {
// 							if (err) {
// 								res.render('error', {message: 'Error writing to MySQL'});
// 								console.log("Error writing to mysql");
// 								console.log(err);
// 							}
// 							else { //success
// 								res.redirect("/");

// 								//Output the results of the query to the Heroku Logs
// 								console.log(result);
// 							}
// 						});
// 					}
// 				});
// 			}
// 			else {
// 				res.render('error', {message: 'Error on Delete'});
// 			}
		
// 			dbConnection.release();
// 		}
// 	});
// });


module.exports = router;
