const express = require("express")
const { listOrderForUser, createOrder } = require("../models/order")
const Order = require("../models/Order")
const router = express.Router()

router.get('/', async (req,res,next)=>{
    try{

        listOrderForUser()

        const listOrderForUser = await Order.listOrderForUser(req.body)
        return res.status(200).json({listOrderForUser})


 

    }catch(err){
        next(err)
    }
})



router.post('/', async (req,res,next)=>{
    try{
   
        const createOrder = await Order.createOrder(req.body)
        return res.status(200).json({createOrder})

    }catch(err){
        next(err)
    }
})




module.exports = router