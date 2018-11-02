// We are linking our routes to a series of "data" sources.


var friendFunc = require('../data/friendFunc')

// ===============================================================================
// ROUTING

// Import the list of friend entries

module.exports = function(app) {
  // API GET and POST Requests
  // Below are the routes when users input data and get their data returned on a page

  app.post("/api/survey", function(req, res) {
    let survey = req.body
    // console.log(survey)
    let matchF = friendFunc.matchFriend(survey)
    res.json(matchF)
    // console.log(matchF)
})

  app.post("/friendMatch", function(req, res) {
    var match = req.body
  ;
});

  // app.get("/userData", function(req, res) {
  //   res.json(friendArray);
  // });

}

