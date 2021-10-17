const operationModel = require('../models/operationModel')


module.exports = {
    create : async(req,res,next) =>{
       await operationModel.create(req.body)
        res.json({message : 'operacion exitosa',res:req.body})
    },
    getAll : async ( req,res,next) =>{
        const data = await operationModel.getAll()
            res.json(data)   
    },
    getIngreso : async (req,res,next) =>{
        const response = await operationModel.getIngreso()
        res.json(response)
    },
    getEgreso : async (req,res,next) =>{
        const response = await operationModel.getEgresos()
        res.json(response)
    }
}



/*  
newOperation
getAllOperations
getEntry
getEgress
delete
put 
*/