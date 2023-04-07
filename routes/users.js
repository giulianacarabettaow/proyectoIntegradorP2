var express = require('express');
var router = express.Router();
let usersController= require('../controllers/usersController');

router.get('/', usersController.index);
router.get('/login', usersController.login);
router.get('/headerLogueado', usersController.show);
router.get('/profile', usersController.showProfile);
router.get('/profile-edit', usersController.edit);
router.get('/register', usersController.register);

module.exports = router;
