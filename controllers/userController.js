const userModel = require('../models/userModel');


module.exports = {
    getAll : async (req,res,next) =>{
        try {
       const user = await userModel.getAll()
       res.json({message : "consulta exitosa" , data : user})
        }catch(e){
            res.json({message : "Hubo un error" , type : e.code})
        }
    },
    create : async(req,res,next) =>{
        try{
           const newUser =  await userModel.create(req.body)
            res.json(newUser)
        }catch(e){
                res.json({message: "Hubo un error" , type: e.code})  
        }
    }
}



/* 
register ,
login ,
changePassword

*/