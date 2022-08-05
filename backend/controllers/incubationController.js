const asyncHandler=require('express-async-handler')

const Booking=require('../models/bookingModel')



//@description: set goals
// @route : POST /api/goals
// @access : private

const createIncubation=asyncHandler(async(req,res)=>{
    console.log('offfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
    console.log(req.user.id);
    const{name,email, phone, city,address,state,companyName,teamBackground,companyProducts,
        solveProblems,uniqueSolution,valuePropsitionForCustomer,competitors,revenueModel,
         potentialMarketSizeProduct,marketingPlan,typeOfIncubation,buisnessProposal}=req.body
    console.log('777777777777777777777777777777777777777777777777777777777777');
    if(!req.body){
        res.status(400)
        throw new Error('please add a text fielduu')
    }
    const form=await Booking.create({
        name,email, phone, city,address,state,companyName,teamBackground,companyProducts,
        solveProblems,uniqueSolution,valuePropsitionForCustomer,competitors,revenueModel,
         potentialMarketSizeProduct,marketingPlan,typeOfIncubation,buisnessProposal,user:req.user.id
        
        
    })
    console.log(form);
    console.log('99999999999999999999999999999');
    res.status(200).json(form)
})

const getIncubation=asyncHandler(async(req,res)=>{
    console.log('abccccccc');
    console.log(req.user.id);
    const goals=await Booking.find({user:req.user.id})
   console.log('get form');
    res.status(200).json(goals)
})

const getNotOpened=asyncHandler(async(req,res)=>{
    const count=await Booking.find({open:false}).count();
    const companies=await Booking.find({open:false})

    if(count==null){
        res.json({count})
    }
    else{
        res.json({count,companies})
    }


})

const openedToClose=asyncHandler(async(req,res)=>{
    await Booking.updateMany({open:false},{$set:{open:true}})

    const count=await Booking.find({open:false}).count();
    
        res.json({count})
   
})



module.exports={
    createIncubation,getIncubation,getNotOpened,openedToClose
}