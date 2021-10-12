const pruebaModel = require('../models/prueba');


module.exports = {
    getAll : async (req,res,next) =>{
       const prueba = await pruebaModel.getAll()
       console.log(prueba)
       res.json(prueba)
    }
}