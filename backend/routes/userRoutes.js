const express=require('express');
const { registerUser, loginUser, getMe } = require('../controllers/userControllers');
const router=express.Router()

const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
module.exports=router;