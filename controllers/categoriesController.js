const categoriesModel = require('../models/categoriesModel')


module.exports = {
    getAll : async (req,res,next) =>{
       const categories = await categoriesModel.getAll()
       console.log(categories)
       res.json({message : "Consulta exitosa",categorias : categories})
    },
    create : async(req,res,next) =>{
       await categoriesModel.create(req.body)
        res.json(req.body)
    },
    delete : async(req,res,next) => {
        await categoriesModel.delete(req.body);
        res.json("Deleted")
    },
    update : async(req,res,next) => {
        await categoriesModel.update(req.body);
        res.json('updated')
    }
}