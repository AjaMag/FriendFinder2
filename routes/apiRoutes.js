// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all users input.
// var userData = require("../data/userData");
var friendArray = require("../data/friendData");
var userArray = require("../data/userData");
// ===============================================================================
// ROUTING

// Import the list of friend entries

module.exports = function(app) {
  // API GET and POST Requests
  // Below are the routes when users input data and get their data returned on a page

  app.post("/survey", function(req, res) {
    let survey = req.body
    // req.json();
    userArray.push(survey)
    var userScores = survey.scores;

    // Compute best friend match
		var matchName = '';
		var matchImg = '';
		var randDiff = 10000; // Make an initial value big for comparison

		//To loop through friends in the friendArray
		for (var i = 0; i < friendArray.length; i++) {
      //console.log('friend = ' + JSON.stringify(friendArray[i]));
    
      // Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userScores.length; j++) {
				diff += Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(userScores[j]));
			}
      console.log(diff);
      console.log(friendArray)
      console.log(userArray)
      //If lowest difference, record the friend match
			// if (diff < randDiff) {
			// 	console.log('Match found via score diff: ' + diff);
			// 	console.log('Match name = ' + friendArray[i].name);
			// 	console.log('Match image = ' + friendArray[i].photo);

			// 	randDiff = diff;
			// 	matchName = friendArray[i].name;
			// 	matchImg = friendArray[i].photo;
			// }

}
  })

//   app.get("/survey", function(req, res) {
//   res.json(userData);
// });

  app.get("/userData", function(req, res) {
    res.json(friendArray);
  });

}

