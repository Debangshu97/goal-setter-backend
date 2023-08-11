const asyncHandler= require("express-async-handler");

const getGoals= asyncHandler( async(req,res)=>{
    res.json({message:"get goals"})
}
)
const setGoals= asyncHandler(async(req, res, )=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add req body")
    }
    res.json({messsage:"set goal"});
}
)
const updateGoals=asyncHandler( async(req, res, )=>{
    res.json({messsage:`update goal ${req.params.id}`})}
)
const deleteGoals= asyncHandler(async(req, res, )=>{
    res.json({messsage:`delete goal ${req.params.id}`});
}
)
module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}