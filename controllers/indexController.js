const models= require("../database/models") //requeris la conexion a los modelos
const productos= models.Producto
const comentario=models.Comentario
const op = models.Sequelize.Op;


//let db= require('../db/data')

let indexController = {
    products: function(req,res){
        productos.findAll({
            order: [['createdAt', 'DESC']],
            limit: 8,
            include:[
                {association:"owner"},
                {association:"comentarios"}
        ],
       
        })
        .then(function(data){ //data trae la info que encuentra el findAll
            //return res.send (data)
           return res.render('index', {listaProducts: data})
            
        })
        .catch(error=>console.log(error)) //=> arrow function
    },

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
    })}
}

module.exports= indexController;