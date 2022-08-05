const mongoose = require('mongoose')
const moment = require('moment');

const bookingSchema=mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
       
        ref:'User',
    },

    
    name:{
        type:String,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add a email'],
        unique:true,
    },
   
    phone:{
        type:String,
        
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    companyName:{
        type:String
    },
    teamBackground:{
        type:String
    },
    companyProducts:{
        type:String
    },
    solveProblems:{
        type:String
    },
    uniqueSolution:{
        type:String
    },
    valuePropsitionForCustomer:{
        type:String
    },
    competitors:{
        type:String
    },
    revenueModel:{
        type:String
    },
    potentialMarketSizeProduct:{
        type:String
    },
    marketingPlan:{
        type:String
    },
    typeOfIncubation:{
        type:String
    },
    buisnessProposal:{
        type:String
    },
    status:{
        type:String,
        default:"pending"
    },open: {
        type:Boolean,
        default:false,
    },
    bookingStatus:{
        type:Boolean,
        default:false
    },
    createdAt : {
        type:String,
        default:moment().format("DD-MM-YYYY")
    },
    
    
    
},
    {
        timestamps:true
    }
)


module.exports=mongoose.model('Booking',bookingSchema)