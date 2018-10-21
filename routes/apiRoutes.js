// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all users input.

var userData = require("../data/userData");

// ===============================================================================
// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(userData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/survey", function(req, res) {
//the POST route allows user data to be put onto the server
    app.post('./data/userData' , function (res, req) {
        res.json(userData);
    })
      friendArray.push(req.body);
      res.json(true);

//the GET route allows us to grab data from the server
    app.get("./data/userData", function(req, res) {
        res.json(userData);
      });

    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }


  // ---------------------------------------------------------------------------
  //this below code clears out the user Data while working with the functionality.

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     userData.length = [];
//     res.json({ ok: true });
//   });
// };
