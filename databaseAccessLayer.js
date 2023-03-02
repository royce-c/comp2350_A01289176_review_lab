const database = include('/databaseConnection');

// const passwordPepper = "SeCretPeppa4MySal+";

function getAllRestaurants(callback) {
	let sqlQuery = "select * from restaurant";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}

// function addPerson(postData, callback) {
// 	let sqlInsert = "INSERT INTO person (first_name, last_name) VALUES (:fname, :lname);";
// 	let params = {	
// 			fname: postData.first_name,
// 			lname: postData.last_name
// 		};
// 	console.log(sqlInsert);
// 	database.query(sqlInsert, params, (err, results, fields) => {
// 		if (err) {
// 			console.log(err);
// 			callback(err, null);
// 		}
// 		else {
// 			console.log(results);
// 			callback(null, results);
// 		}
// 	});
// }

// function deletePersonSkill(personId, callback) {
// 	let sqlDeletePersonSkill = "delete from person_skill where person_id = :personID";
// 	let params = {
// 		personID: personId
// 	};
// 	console.log(sqlDeletePersonSkill);
// 	database.query(sqlDeletePersonSkill, params, (err, results, fields) => {
// 		if (err) {
// 			callback(err, null);
// 		}
// 		else {
// 			console.log(results);
// 			callback(null, results);
// 		}		
// 	});	
// }
 
// function deletePerson(personId, callback) {
// 	let sqlDeletePerson = "delete from person where person_id = :personID";
// 	let params = {
// 		personID: personId
// 	};
// 	console.log(sqlDeletePerson);
// 	database.query(sqlDeletePerson, params, (err, results, fields) => {
// 		if (err) {
// 			callback(err, null);
// 		}
// 		else {
// 			console.log(results);
// 			callback(null, results);
// 		}		
// 	});	
// }

module.exports = {getAllRestaurants}
