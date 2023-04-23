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
    
    let{name,age}=req.body;
    let image=req.file;
      
      const cloudinaryUpload = await cloudinary.uploader.upload(image.path, {
      folder: 'uploads',
    }); 
      const obj = await Upload.create(
      { 
        name,
        image: cloudinaryUpload.secure_url,
        age
    
      });

      console.log(`datos almacenados en bd y en el cloudinary: ${cloudinaryUpload.secure_url} `)
       return res.json(obj); 
  //console.log(name,age,cloudinaryUpload.secure_url)
  
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


