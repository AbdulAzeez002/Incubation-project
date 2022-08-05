const Booking = require('../models/bookingModel')
const SLOT = require("../models/slotModel");

const slotDuplicate = async(req,res) =>{
    try {
      const{applicantId}=req.body
      const duplicate = await Booking.findById({_id:applicantId})
      console.log(duplicate);
      if(!duplicate.bookingStatus){
        await Booking.findByIdAndUpdate({_id:applicantId},{$set:{bookingStatus:true}})
        res.status(200).json({ noDuplicate: true });
      }else{
        res.status(200).json({ duplicateRemoved: true });

      }
    } catch (error) {
      res.json({error,slotDuplicate:false});
    }
  }

  const getApplications = async (req, res) => {
    try {
      const approvedApp = await Booking.find({
        $and: [{ status: "Registered" }, { bookingStatus: false }],
      });
      console.log(approvedApp);
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      res.json(approvedApp);
    } catch (error) {
      res.json({error,bookedSlots:false})
    }
    
  };

  const getBookingSlots = async (req, res) => {
    try {
      const slots = await SLOT.find({});
      
      res.json(slots);
      
    } catch (error) {
      res.json({error,bookedSlots:false})
    }
    
  };

  const slotUpdate = async (req, res) => {
    try {
      const { applicantId, slotId, slotSection } = req.body;
      const application = await Booking.findByIdAndUpdate({ _id: applicantId });
      console.log(application);
      const bookSlot = await SLOT.findByIdAndUpdate(
        { _id: slotId },
        {
          $set: {
            selected: true,
            companyname: application.companyName,
            user_email: application.email,
          },
        }
      );
      res.json(bookSlot);
    } catch (error) {
      res.json({error,slotUpdate:false})
    }
  };


  module.exports = {
    
    getBookingSlots,
    getApplications,
    slotUpdate,
    slotDuplicate
  };