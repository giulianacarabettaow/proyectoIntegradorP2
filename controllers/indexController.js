const models= require("../database/models")
const productos= models.Producto


let db= require('../db/data')

let indexController = {
    products: function(req,res){
        productos.findAll({
            limit: 8,
            include:[{association:"owner"}]
        })
        .then(function(data){ //data trae la info que encuentra el findAll
            return res.send (data)
            return res.render('index', {listaProducts: db.productos})

        })
        .catch(error=>console.log(error)) //=> arrow function
    },
    show: function (req, res) {
        return res.render("search-results", {products:db.productos});
      },
}

module.exports= indexController;