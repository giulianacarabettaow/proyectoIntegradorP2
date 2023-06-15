let express = require ('express');
let router = express.Router();

let productsController = require('../controllers/productsController');


   router.get('/',productsController.index)
   router.get('/id/:id', productsController.showProducts);
   router.get('/add', productsController.add);
   router.post('/add', productsController.addProduct);
   router.get('/search-results',productsController.show);
   router.post('/id/:id', productsController.addComment);
   router.get('/users/register',productsController.register); // consultar estas rutas
   router.get('/users/login', productsController.login);
   router.get('/users/profileEdit', productsController.edit);
   router.post('/id/:id/delete', productsController.deleteProduct)



module.exports = router;