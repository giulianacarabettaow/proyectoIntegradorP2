
let dbProduct = require("../db/data");

let productsController = {
  index: function (req, res) {
    return res.render('allProducts', {allProd: dbProduct.productos});
  },

  add: function (req, res) {
    return res.render('productAdd', {users: dbProduct.usuario });
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
  register: function(req,res){
    return res.render('register')
  },
  edit: function(req,res){
    return res.render('profileEdit', {users: dbUsers.usuario})
  },
  login: function(req,res){
    return res.render('login')
  },
  edit: function(req,res){
    return res.render('profileEdit', {users: dbUsers.usuario})
  },
  
};

module.exports = productsController;
