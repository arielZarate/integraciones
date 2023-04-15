const express = require('express');
const router=express.Router();
const multer  = require('multer');



 const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/images"); 
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage })

const enviar = function(req, res) {
    //res.render("index.hbs");
    console.log(req.file);
    res.send("file upload");
};

router.post("/", upload.single('filename'), enviar);


router.get('/',(req,res)=>{
res.json("Hola compañero")

})



module.exports=router;