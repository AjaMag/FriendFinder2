//npm dependency
var express = require("express");
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTES for data to travel when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// =============================================================================
// LISTENER to effectively "start" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("http://localhost:" + PORT);
});