import Jimp from "jimp";

async function crop() { // Function name is same as of file name
   // Reading Image
   const image = await Jimp.read
   ("./20220308_110052.jpg");
   image.crop(1, 1, 2500, 2500)  
   .write('crop.jpg');
}

crop(); // Calling the function here using async
console.log("Image is processed successfully");
