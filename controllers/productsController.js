const models= require("../database/models") //requeris la conexion a los modelos
const productos= models.Producto
const comentario=models.Comentario

let dbProduct = require("../db/data"); 

let productsController = {
  index: function (req, res) {
    productos.findAll({
      include:[{association:"owner"}]
    })
    .then(function(resultadoAll){

     // return res.send(resultadoAll)
      return res.render("allProducts", {allProd:resultadoAll})
      //return res.render('allProducts', {allProd: dbProduct.productos});
    })
  },

  add: function (req, res) {
    return res.render('productAdd', {users: dbProduct.usuario });
  },
  show: function (req, res) {
    return res.render("search-results", {products:dbProduct.productos});
  },
  showProducts: function (req, res) {
    let id = req.params.id;
    productos.findByPk(id,{
      include: [
        {association: "owner"},
        {association: "comentarios"}
      ]
    })

    .then(function(resultado){
      // return res.send(resultado.Comentario) no trae nada
      return res.render("products",{productUnique: resultado, comentario: resultado}) //anda
    })


    //let resultado = [];
    //let i = 0; i < dbProduct.productos.length; i++) {
     // if (dbProduct.productos[i].id == id){
     //   resultado.push(dbProduct.productos[i]);
    //    console.log(resultado[0]);
    //  }
   // }
    //return res.render("products", { productUnique: resultado[0], comentario: dbProduct.comentarios });
    
  
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
