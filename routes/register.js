let express = require('express');
let router = express.Router ();
let registerController = require ('../controllers/registerController.js');

router.get('/', registerController.registro);


module.exports = router;