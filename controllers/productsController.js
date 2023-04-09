
let dbProduct = require("../db/data");

let productsController = {
  index: function (req, res) {
    return res.send(dbProduct);
  },

  add: function (req, res) {
    return res.render('productAdd', {users: dbProduct.usuario }); //no anda la ruta
  },
  show: function (req, res) {
    return res.render("search-results", {products:dbProduct.productos});
  },
  showProducts: function (req, res) {
    let id = req.params.id;
    let resultado = [];
    for (let i = 0; i < dbProduct.productos.length; i++) {
      if (dbProduct.productos[i].id == id){
        resultado.push(dbProduct.productos[i]);
        console.log(resultado[0]);
      }
    }
    return res.render("products", { productUnique: resultado[0], comentario: dbProduct.comentarios }); 
  },
 
};

module.exports = productsController;
