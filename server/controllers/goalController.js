const asyncHandler= require("express-async-handler");

const Goal= require('../models/goalModel');
const { create } = require("domain");


const getGoals= asyncHandler( async(req,res)=>{
    const goals= await Goal.find()
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
})

    res.json({messsage:"set goal"});
}
)
const updateGoals=asyncHandler( async(req, res, )=>{
    const goal= await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
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