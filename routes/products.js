let express = require ('express');
let router = express.Router();
const multer = require ('multer');
const path = require('path');

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, '../public/images/products')
   },
   filename: function (req, file, cb) {
     cb(null, file.fieldname + '-' + Date.now())
   }
 });
 
 const upload = multer({ storage: storage });
 

let productsController = require('../controllers/productsController');


   router.get('/',productsController.index)
   router.get('/id/:id', productsController.showProducts);
   router.get('/add', productsController.add);
   router.post('/add',  upload.single('imagen'), productsController.addProduct);
   router.get('/search-results',productsController.show);
   router.post('/id/:id', productsController.addComment);
   router.get('/users/register',productsController.register); // consultar estas rutas
   router.get('/users/login', productsController.login);
   router.get('/users/profileEdit', productsController.edit);
   router.post('/id/:id/delete', productsController.deleteProduct);
   router.get('/editar/:id', productsController.editProduct);
   router.post('/editar/:id', productsController.editingProduct);
   router.get('/search-results-usuarios', productsController.searchUsuarios)


module.exports = router;