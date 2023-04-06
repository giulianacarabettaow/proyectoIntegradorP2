let elementos = require('../db/elementos');
let productController = {
    product: function(req,res){
        return res.render ('product')
    },
    productAdd: function(req, res){
        return res.render ('product')
    }
}

module.exports= productController;