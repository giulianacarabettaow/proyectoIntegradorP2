let elementos = require('../db/elementos');
let productController = {
    product: function(req,res){
        return res.send ('Nuestros Productos:')
    },
    productAdd: function(req, res){
        return res.send ('quetal')
    }
}

module.exports= productController;