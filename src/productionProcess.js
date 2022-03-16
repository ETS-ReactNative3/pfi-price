// const Jimp = require('jimp') ;

var Jimp = require('jimp');

//User-Defined Function to read the images
async function main() {
  const image1 = await Jimp.read
('https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png');
  const image2 = await Jimp.read
('https://media.geeksforgeeks.org/wp-content/uploads/20190328185333/gfg111.png');

  //call to blit function
  image1.blit(image2, 20, 40)
  //write image
  .write('blit1.png');
  console.log("Image Processing Completed");
}

main();
