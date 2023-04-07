let express = require ('express');
let router = express.Router();
let productsController = require('../controllers/productsController');


   router.get('/',productsController.index)
   router.get('/id/:id', productsController.showProducts);
   router.get('/products/add',productsController.add);
   router.get('/search-results',productsController.show);


module.exports = router;