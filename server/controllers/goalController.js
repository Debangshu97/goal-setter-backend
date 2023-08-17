const asyncHandler= require("express-async-handler");

const Goal= require('../models/goalModel');
const User= require('../models/userModel');
const { create } = require("domain");


const getGoals= asyncHandler( async(req,res)=>{
    const goals= await Goal.find({user:req.user.id});
    res.json(goals)
}
)
const setGoals= asyncHandler(async(req, res, )=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add req body")
    }
const goal= await Goal.create({
    text: req.body.text,
    user:req.user.id,
})

     res.status(200).json(goal)
}
)
const updateGoals=asyncHandler( async(req, res, )=>{
    const goal= await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
     const user= await User.findById(req.user.id)

     //Check for user
     if(!user){
        res.status(401)
        throw new Error('User not found')
     }

     //Make sure user logged in matches the goal user
     if(goal.user.toString()!==user.id){
        res.status(401)
        throw new Error('User not authorized')
     }
    const updatedGoal= await Goal.findByIdAndUpdate(goal,req.body,{
        new:true
    })
    res.json(updatedGoal)}
)
const deleteGoals= asyncHandler(async(req, res, )=>{
    const goal= await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    const user= await User.findById(req.user.id)

     //Check for user
     if(!user){
        res.status(401)
        throw new Error('User not found')
     }

     //Make sure user logged in matches the goal user
     if(goal.user.toString()!==user.id){
        res.status(401)
        throw new Error('User not authorized')
     }
     
   await Goal.findByIdAndDelete(req.params.id)

    res.json({id:req.params.id});
}
)
module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}