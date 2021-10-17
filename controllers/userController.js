const userModel = require('../models/userModel');


module.exports = {
    getAll : async (req,res,next) =>{
       const prueba = await userModel.getAll()
       console.log(prueba)
       res.json(prueba)
    },
    create : async(req,res,next) =>{
       await userModel.create(req.body)
        res.json(req.body)
    }
}



/* 
register ,
login ,
changePassword

*/