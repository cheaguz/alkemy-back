const userModel = require('../models/userModel');


module.exports = {
    getAll : async (req,res,next) =>{
        try {
       const prueba = await userModel.getAll()
       console.log(prueba)
       res.json(prueba)
        }
        catch(e){
            console.log(e)
        }
    },
    create : async(req,res,next) =>{
       await userModel.create(req.body)
        res.json(req.body)
    }
}