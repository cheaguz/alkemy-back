var express = require('express');
var router = express.Router();

const operationController = require('../controllers/operationController');


router.post('/',operationController.create);
router.get('/',operationController.getAll)
router.get('/ingreso' , operationController.getIngreso) 
router.get('/egreso',operationController.getEgreso)     
router.get('/:name' , operationController.getByCategory)

router.delete('/:id' , operationController.delete);
router.put('/:id' , operationController.update);

module.exports = router;
