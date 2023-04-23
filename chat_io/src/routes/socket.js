const express=require('express');
const router=express.Router();
const {getSaludo}=require('../controllers/socket')


router.get('/',getSaludo)



module.exports=router;