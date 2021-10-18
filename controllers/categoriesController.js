const categoriesModel = require('../models/categoriesModel')


module.exports = {
    getAll : async (req,res,next) =>{
        try {
            const categories = await categoriesModel.getAll()
            res.json({message : "Consulta exitosa",categorias : categories})
        }catch(e){
            res.json({message:"Hubo un error",type : e.code})
        };
    },
    create : async(req,res,next) =>{
        try{
            const newCategory = await categoriesModel.create(req.body)
            console.log(newCategory)
            res.json({message : "Categoria creada con exito"})
        }catch(e){
            res.json({message:"Hubo un error",type : e.code})
        }
    },
    delete : async(req,res,next) => {
        try {
            await categoriesModel.delete(req.body);
            res.json({message : 'Categoria eliminada correctamente'})
        }
        catch(e){
            res.json({message:"Hubo un error",type : e.code})
        }
    },
    update : async(req,res,next) => {
        try{
            await categoriesModel.update(req.body);
            res.json({message : 'Categoria modificada correctamente'})
        }
        catch(e){
            res.json({message:"Hubo un error",type : e.code})
        }
    }
}