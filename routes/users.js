var express = require('express');
var router = express.Router();
let usersController= require('../controllers/usersController');

router.get('/', usersController.index);
router.get('/login', usersController.login);
router.post('/login', usersController.processLogin); //procesa info por post
router.get('/headerLogueado', usersController.show);
router.get('/profile', usersController.showProfile);
router.get('/profileEdit', usersController.edit);
router.post('/profileEdit', usersController.edit); //el usuario puede editar sus datos
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister); //esta ruta procesa la información del formulario al tener el metodo post

module.exports = router;
