const userModel = require('../models/userModel');


module.exports = {
    getAll : async (req,res,next) =>{
        try {
            const user = await userModel.getAll()
            res.json({message : "consulta exitosa" , data : user})
        }catch(e){
            res.json({message : "Hubo un error" , data : e.code})
        }
    },
    register : async(req,res,next) =>{
        try{
           const newUser =  await userModel.create(req.body)
            res.json(newUser)
        }catch(e){
                res.json({message: "Hubo un error" , data: e.code})  
        }
    },
    login : async (req,res,next) =>{
        try{
            // req mail ,  req password
            const user = await userModel.login(req.body)
            console.log('usuario',user['mail'])
           
            res.json({message : "Login exitoso" , data : user})
        }catch(e){
            res.json({message : "hubo un error"})
            console.log(e)
           
        }
    },

}



/* 
register ,
login ,
changePassword

*/