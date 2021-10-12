var express = require('express');
var router = express.Router();
const pruebaController = require('../controllers/pruebas')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/prueba', pruebaController.getAll)

module.exports = router;
