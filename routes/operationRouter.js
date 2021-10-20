var express = require('express');
var router = express.Router();

const operationController = require('../controllers/operationController');


router.post('/',operationController.create);
router.get('/',operationController.getAll)
router.get('/ingreso' , operationController.getIngreso) //entry
router.get('/egreso',operationController.getEgreso)     //egress
router.delete('/' , operationController.delete);
module.exports = router;
