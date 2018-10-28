// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all users input.

var userData = require("../data/userData");

// ===============================================================================
// ROUTING

// Import the list of friend entries

module.exports = function(app) {
  // API GET and POST Requests
  // Below are the routes when users input data and get their data returned on a page

  app.post("/survey", function(req, res) {
    res.json(userData);
})
  app.get("/userData", function(req, res) {
    res.json(userData);
  });




//the POST route allows user data to be put onto the server
    // app.post('/data/userData' , function (res, req) {
    //     res.json(userData);
    // })
    
}

