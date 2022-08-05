const express=require('express')
const router=express.Router()
const {createIncubation,getIncubation,getNotOpened,openedToClose}=require('../controllers/incubationController')

const {protect}=require('../middleware/authMiddleware')

router.get('/',protect,getIncubation)

router.post('/',protect,createIncubation)

router.get('/notOpenedApps',getNotOpened)

router.get('/openedToclose',openedToClose)


module.exports=router;