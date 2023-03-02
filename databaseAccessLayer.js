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

function addRestaurant(postData, callback) {
	let sqlInsert = "INSERT INTO restaurant (restaurant_name, description) VALUES (:restaurant_name, :description);";
	let params = {	
		restaurant_name: postData.restaurant_name,
			description: postData.description
		};
	console.log(sqlInsert);
	database.query(sqlInsert, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}

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
 
function deleteRestaurant(restaurantId, callback) {
	let sqlDeleteRestaurant = "delete from restaurant where restaurant_id = :restaurantID";
	let params = {
		restaurantID: restaurantId
	};
	console.log(sqlDeleteRestaurant);
	database.query(sqlDeleteRestaurant, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});	
}

module.exports = {getAllRestaurants, addRestaurant, deleteRestaurant}
