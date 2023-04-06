let listaProductos= require('../db/elementos');
let indexController ={
    inicio: function(req,res) {
       return res.render('index', {listaProductos});
      }
}

module.exports = indexController;
