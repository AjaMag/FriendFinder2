// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.

var friendArray = [
    {
      name: "Kanye West",
      photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/12/08/Kanye-West-White-House.jpg",
      scores: [ '1', '5', '3', '2', '4', '5', '1', '3', '2', '4']
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;


//userResp = userInput[2] 

// var diff = 0
// diff += Math.abs(friendArray[i].scores[j] - userResp.scores[j])