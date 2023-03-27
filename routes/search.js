let express = require ('express'); 
let searchController = require('../controllers/searchController');
let router = express.Router(); 

router.get('/',searchController.search);
router.get('/search/results',searchController.results);

module.exports= router;