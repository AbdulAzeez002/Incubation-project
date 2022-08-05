const mongoose = require('mongoose')

const Slot = new mongoose.Schema({
    section:{type:String},
    selected:{type:Boolean,default:false},
    slot_no:{type:Number},
    companyname:{type:String},
    user_email:{type:String}
},{collection:'slots'})

const SlotModel = mongoose.model('slots',Slot)

module.exports=SlotModel;