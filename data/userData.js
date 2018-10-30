// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.

var friendArray = [
    {
      name: "Kanye West",
      photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/12/08/Kanye-West-White-House.jpg",
      scores: [ '1', '5', '3', '2', '4', '5', '1', '3', '2', '4']
    },

    {
      name: "Hope Gratrix",
      photo: "https://i.pinimg.com/originals/53/a3/02/53a302022a32b9a88a280f6e9ac74065.png",
      scores: [ '5', '2', '1', '4', '3', '3', '2', '6', '4', '2']
    },

    
    {
      name: "Aja Magdaleno",
      photo: "https://pics.clipartpng.com/midle/Brown_Bear_PNG_Clipart-669.png",
      scores: [ '4', '3', '2', '5', '1', '1', '5', '1', '5', '5']
    },

  ];

  var userArray = [
    
  ]
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  module.exports = userArray;




