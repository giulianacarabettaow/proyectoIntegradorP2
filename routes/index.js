var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.inicio);

module.exports = router;
//archivo de express
