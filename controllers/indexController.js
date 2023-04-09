let db= require('../db/data')

let indexController = {
    products: function(req,res){
        return res.render('index', {listaProducts: db.productos})
    },
    show: function (req, res) {
        return res.render("search-results", {products:db.productos});
      },
}

module.exports= indexController;