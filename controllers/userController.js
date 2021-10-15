const userModel = require('../models/userModel');


module.exports = {
    getAll : async (req,res,next) =>{
       const prueba = await pruebaModel.getAll()
       console.log(prueba)
       res.json(prueba)
    },
    create : async(req,res,next) =>{
       await pruebaModel.create(req.body)
        res.json(req.body)
    }
}