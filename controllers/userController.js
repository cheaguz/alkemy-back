const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


module.exports = {

    register: async (req, res, next) => {
        try {
            const newUser = await userModel.register({
                mail: req.body.mail,
                password: bcrypt.hashSync(req.body.password, 10)
            });
            res.json({message: "usuario creado con exito!"})
        } catch (e) {
            res.json({message: "Hubo un error",data: e.code})
        }
    },
    login: async (req, res, next) => {
        try {
            const user = await userModel.login(req.body)
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({user : user.user},"123")
                res.json({message: "Login exitoso", token:token})
            } else {
                res.json({message: "Usuario o contraseña erronea"})
            }
        } catch (e) {
            res.json({message: "hubo un error"});
        }
    },

}



/* 

changePassword

*/