const operationModel = require('../models/operationModel')


module.exports = {
    create : async(req,res,next) =>{
        const id=2 //token USER ID
        try{
            await operationModel.create(req.body,id)
            res.json({message : 'operacion exitosa',res:req.body})
        }catch(e){
                res.json({message : "hubo un error",data: e})
            }
    },
    getAll : async ( req,res,next) =>{
        const id=2; //token USER ID
        const data = await operationModel.getAll(id)
            res.json(data)   
    },
    getIngreso : async (req,res,next) =>{
        const id = 2 //token USER ID
        const response = await operationModel.getIngreso(id)
        res.json(response)
    },
    getEgreso : async (req,res,next) =>{
        const id = 2 ;  //token USER ID
        const response = await operationModel.getEgresos(id)
        res.json(response)
    },
    delete : async ( req, res, next) => {
        const idOperation = req.params.id;
        const userId = 2 //token USER ID
        console.log(req.headers.token)
        try {
            const deleted = await operationModel.delete(idOperation , userId)
            res.json({message : "Deleted"})
        }catch(e){
            console.log(e)
            next(e)
        }
    },
    getByCategory : async (req,res,next) => {
        const id = 2; //token USER ID
        console.log(req.params.name)
        try {
            const response = await operationModel.getByCategory(id,req.params.name)
            res.json({message : 'operacion exitosa',res:response})
        } catch (error) {
            res.json({message : "Hubo un error",err:error})
        }
    },
     update : async (req,res,next) =>{
         try {
             console.log('params id',req.params.id , 'body',req.body)
             const ID_USUARIO = 2 //token USER ID
             const response = await operationModel.update(req.params.id , req.body , ID_USUARIO)
             res.json({message : 'operacion exitosa' , res : response})
         } catch (error) {
             console.log(error)
             next(error)
         }
     }
}



/*  
falta Recibir token usuario
*/