let express = require('express');
let router = express.Router ();
let profileController = require ('../controllers/profileController');


router.get('/', profileController.profile);
router.get('/profile/edit', profileController.edit);

module.exports = router;