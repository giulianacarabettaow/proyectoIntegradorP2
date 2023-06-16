var express = require('express');
var router = express.Router();
let usersController= require('../controllers/usersController');

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin); //procesa info por post
router.get('/register', usersController.register);
router.post('/register', usersController. processRegister); //esta ruta procesa la información del formulario al tener el metodo post
router.post('/logout', usersController.logout);
router.get('/headerLogueado', usersController.show);
router.get('/profile/:id', usersController.showProfile);
router.get('/profileEdit/:id', usersController.edit);
router.post('/profileEdit/:id', usersController.processEdit)
router.post('/profileEdit', usersController.edit); //el usuario puede editar sus datos
router.get('/search-results-usuarios', usersController.searchUsuarios)

module.exports = router;
