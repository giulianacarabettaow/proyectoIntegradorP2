const models= require("../database/models") //requeris la conexion a los modelos
const productos= models.Producto
const comentario=models.Comentario
const user=models.Usuario
const op = models.Sequelize.Op;

let dbProduct = require("../db/data"); 

let productsController = {
  index: function (req, res) {
    productos.findAll({
      order:[['createdAt', 'DESC']],
      include:[{association:"owner"},
      {association: 'comentarios'}]
    })
    
    .then(function(resultadoAll){

     // return res.send(resultadoAll)
      return res.render("allProducts", {allProd:resultadoAll})
      //return res.render('allProducts', {allProd: dbProduct.productos});
    })
  },

  add: function (req, res) {
    if (req.session.user != undefined){
      return res.render('productAdd')
  } else{
      return res.redirect('login')
  }
  },

  addProduct: function(req,res){

    let errors= {};
    
     if(req.body.nombre == ''){
       errors.message='Debes ingresar el nombre del producto'
       res.locals.errors = errors;
       return res.render('productAdd')
     }
     else if(req.body.imagen == ''){
       errors.message='Debes agregar una foto del producto'
       res.locals.errors = errors;
       return res.render('productAdd')
     }
     else if(req.body.descripcion == ''){
       errors.message= 'Debes agregar una descripción del producto'
       res.locals.errors = errors;
       return res.render('productAdd')
     }
     else {
       
          let info = req.body;
        
        let newProd = {
         nombre: info.nombre,
         descripcion: info.descripcion,
         imagen: info.imagen,
         precio: info.precio,
         createdAt: new Date(),
         FkUsuariosId: info.user_id
       }

       productos.create(newProd)

       .then(function(addedProd){

        // podemos agrear con un if un prompt para que el usuario confirme el addedProd

         return res.redirect('/products')
       })
       .catch(function(error){
         console.log(error)
       })
     }

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
        order:[['createdAt', 'DESC']] ,
        include: [
            {association:"owner"},
            {association:"comentarios"}
        ]}
    )

    .then(function(resultadoDeBusqueda){
     //return res.send(resultadoDeBusqueda)
    return res.render ('search-results', {products: resultadoDeBusqueda}) //no renderiza
    })

    .catch(function(error){
      console.log(error)
    })
    },

  showProducts: function (req,res) {
    let id = req.params.id;
    
    let relaciones = { 
      order: [['comentarios', 'createdAt', 'DESC']], 
      
      include:[{association: 'owner'},
              {association: 'comentarios',
                  include:[{association:'comentador'}]
              }]        
    }

    productos.findByPk(id,relaciones)

    .then(function(resultado){

      //return res.send(resultado) //trae los comentarios pero vacios, hay un problema en la relacion de modelos
      return res.render("products",{productUnique: resultado, comentario:resultado.comentarios, owner:resultado.owner}) //anda
    })
  },
  addComment: function(req, res){
    let info= req.body;
    let errors= {};
  if (info.newComment == ''){
    errors.message= 'Debes ingresar un texto'
    res.locals.errors= errors;
    return res.redirect('/products/id/' + req.params.id )
  }else{
      let newComment = {
      textoDelComentario: info.newComment,
      FkUsuariosId: req.session.user.id,
      FkProductosId: req.params.id,
      createdAt: new Date(),
    };

    comentario.create(newComment)
    .then(function(resultado){
      
      return res.redirect('/products/id/'+ newComment.FkProductosId)
      
    })
    .catch(function(error){
      console.log (error)
    })
}   
    



  },







  register: function(req,res ){
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
