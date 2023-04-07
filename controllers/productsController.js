let productsController = {
    index: function(req,res){
        return res.render('products')
    },
    add: function(req,res){
        return res.render('product-add') 
    },
    show: function(req,res){
        return res.render('search-results')
    },
    showProducts: function(req,res){
        return res.render('products')
    }

}

module.exports = productsController;
