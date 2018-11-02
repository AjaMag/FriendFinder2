var friendArray = require("./friendData");
var userArray = require("./userData");

//the below function will find the user a friend Match!

module.exports = {
    matchFriend(survey) {
        // req.json();
        userArray.push(survey)
        console.log(userArray)
        var userScores = survey.scores;
        let out = {};
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
          // console.log(diff);
          // console.log(friendArray)
          // console.log(userArray)
          //If lowest difference, record the friend match
                if (diff < randDiff) {
                    console.log('Match found via score diff: ' + diff);
                    console.log('Match name = ' + friendArray[i].name);
                    console.log('Match image = ' + friendArray[i].photo);
                    out = {name: friendArray[i].name, photo: friendArray[i].photo}
    
                    randDiff = diff;
                    matchName = friendArray[i].name;
                    matchImg = friendArray[i].photo;
                }
    
    }
    return out;
    }
}
