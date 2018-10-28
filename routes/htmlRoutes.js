//Include the path package to get the correct file path for our html
var path = require("path");

module.exports = function(app) {
  //These routes are for the html on each page, 
  //so user can navigate between pages
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });  

}
  // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
// };
