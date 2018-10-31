// We are linking our routes to a series of "data" sources.


var friendFunc = require('../data/friendFunc')

// ===============================================================================
// ROUTING

// Import the list of friend entries

module.exports = function(app) {
  // API GET and POST Requests
  // Below are the routes when users input data and get their data returned on a page

  app.post("/survey", function(req, res) {
    let survey = req.body
    // console.log(survey)
    friendFunc.matchFriend(survey)
    res.sendStatus(200)
})

//   app.get("/survey", function(req, res) {
//   res.json(userData);
// });

  // app.get("/userData", function(req, res) {
  //   res.json(friendArray);
  // });

}

