let productController = {
    product: function(req,res){
        return res.send ('hola')
    },
    productAdd: function(req, res){
        return res.send ('quetal')
    }
}

module.exports= productController;