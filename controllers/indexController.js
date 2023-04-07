let db= require('../db/data')

let indexController = {
    products: function(req,res){
        return res.render('index', {listaProducts: db.productos})
    }
}

module.exports= indexController;