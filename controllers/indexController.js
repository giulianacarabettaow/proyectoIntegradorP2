let db = require('../db/data')

let indexController = {
    index: function(req,res){
       return res.render('index', {listaDeProductos: db.productos})
    }
}

module.exports = indexController;