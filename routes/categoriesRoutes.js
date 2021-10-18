var express = require('express');
var router = express.Router();
const categoriesController = require('../controllers/categoriesController');

/* GET users listing. */
router.get('/', categoriesController.getAll);
router.post('/',categoriesController.create)
router.delete('/',categoriesController.delete)
router.put('/',categoriesController.update)

module.exports = router;
