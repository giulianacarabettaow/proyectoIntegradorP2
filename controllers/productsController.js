const models= require("../database/models") //requeris la conexion a los modelos
const productos= models.Producto
const comentario=models.Comentario
const user=models.Usuario
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
   // return res.render('productAdd', {users: dbProduct.usuario });
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
      return res.render ('search-results', {products: resultadoDeBusqueda}) //no renderiza
    })

    .catch(function(error){
      console.log(error)
    })
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

    .then(function(resultado){

      //return res.send(resultado) //trae los comentarios pero vacios, hay un problema en la relacion de modelos
      return res.render("products",{productUnique: resultado, comentario: resultado}) //anda
    })
  },

  register: function(req,res){
    return res.render('register')
  },
 
  login: function(req,res){
    return res.render('login')
  },
  edit: function(req,res){
    return res.render("profileEdit", {users: user})
    //return res.render('profileEdit', {users: dbUsers.usuario})
  },
  
};

module.exports = productsController;
