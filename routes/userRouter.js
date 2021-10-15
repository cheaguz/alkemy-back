var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')


router.get('/', userController.getAll)
router.post('/',userController.create);

module.exports = router;
