import { v2 as cloudinary } from '/../cloudinary';
 
/*
const express = require('express');
const app = express();

app.use(express.static('public'));

app.post('/upload', (req, res) => {
  const file = req.files.image;

  // Convert image data to URI format
  const uri = `data:${file.mimetype};base64,${file.data.toString('base64')}`;

  // Do something with the URI...
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
*/

// // Configuration 
// cloudinary.config({
//   cloud_name: "dsmlntedi",
//   api_key: "149962757939664",
//   api_secret: "muSp5plhBaPndQP9QWrS0GMhchE"
// });

// const galUploadTask = (img)=>{
//     const res = cloudinary.uploader.upload(img.name, {public_id: img.name.split(" ").join("-")})

//     res.then((data) => {
//       console.log(data);
//       console.log(data.secure_url);
//     }).catch((err) => {
//       console.log(err);
//     });

//     // Generate 
//     const url = cloudinary.url("olympic_flag", {
//     width: 100,
//     height: 150,
//     Crop: 'fill'
//     });

//     // The output url
//     console.log(url);
// }

// const galImgInput = document.querySelector("#gal-img-file");

// document.querySelector("#gallery-submit").addEventListener("click", (e)=>{
//     e.preventDefault();
    
//     let galImg = galImgInput.files[0];
//     if (galImg){
//         console.log(galImg);
//     }else{
//         alert("upload image first");
//     }
// });
