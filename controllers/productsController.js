const models= require("../database/models") //requeris la conexion a los modelos
const productos= models.Producto
const comentario = models.Comentario
const op = models.Sequelize.Op;

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

  // metodo del buscador
  show: function (req, res) {

    let buscado = req.query.search // Nos trae la query string, especialmente el VALUE del formulario. 

    productos.findAll({
      where:{
        [op.or]: [
        {nombre: {[op.like]: `%${buscado}%` }},
        {descripcion: {[op.like]: `%${buscado}%`}}
      ]},
      include: [
        {association:"owner"},
        {association:"comentarios"}
    ]
    }
    )

    .then(function(resultadoDeBusqueda){
     return res.send(resultadoDeBusqueda)
     //return res.render ('search-results', {products: resultadoDeBusqueda}) //no renderiza
    })

    .catch(function(error){
      console.log(error)
    })

    

    //return res.render("search-results", {products:dbProduct.productos});
  },
  showProducts: function (req, res) {
    let id = req.params.id;
    let relaciones= { 
      include: [
        {
        all: true,
        nested: true,
      }]
    }
    productos.findByPk(id,relaciones)

    // comentario.findAll()

    .then(function(resultado){

      // let detailProduct = {
      //   id: resultado.id,
      //   nombre: resultado.nombre,
      //   descripcion: resultado.descripcion,
      //   imagen: resultado.imagen,
      //   precio: resultado.precio,
      //   FkUsuarioId: resultado.FkUsuarioId,
      //   id: resultado.id
      // }



      //return res.send(resultado) //trae los comentarios pero vacios, hay un problema en la relacion de modelos
      return res.render("products",{productUnique: resultado, comentario: resultado.comentarios}) //anda
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
