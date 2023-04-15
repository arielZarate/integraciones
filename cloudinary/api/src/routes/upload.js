const express=require('express');
const router =express.Router();
const Upload =require('../model/upload-model')
const cloudinary = require('cloudinary').v2;
const multer=require('multer');



//esto es de multer
 const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/images"); 
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});


const upload = multer({ storage: storage })




//=========cloudinary==============

// Configuration 
cloudinary.config({
  cloud_name: "dga3lh6l7",
  api_key: "624762589113821",
  api_secret: "cljY31YlKMhdxwmXLz-uD-IYYP4"
});



const send = async(req, res)=> {
try {
/*     console.log(req.file);
    res.send("file upload"); */
     const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result)
      const data = await Upload.create(
      { image: result.secure_url});
     return res.json(data);
  
} catch (error) {
   console.error(error);
    res.status(500).send('Failed to upload image');
}

};

router.post("/", upload.single('image'), send);


router.get('/',(req,res)=>{
res.json("Hola compañero")

})



module.exports=router;


