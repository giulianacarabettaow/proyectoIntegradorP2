let baseDeDatosLocal= require('../db/data');
let indexController ={
    inicio: function(req,res) {
       return res.render('index', {baseDeDatosLocal});
      }
}

module.exports = indexController;
