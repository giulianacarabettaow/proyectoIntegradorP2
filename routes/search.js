let express = require ('express'); 
let router = express.Router(); 
let searchController = require('../controllers/searchController');

router.get('/',searchController.search);
router.get('/results',searchController.results);

module.exports= router;

