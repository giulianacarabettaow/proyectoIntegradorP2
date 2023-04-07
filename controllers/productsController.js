let productsController = {
    index: function(req,res){
        return res.render('product')
    },
    add: function(req,res){
        return res.render('product-add') 
    },
    show: function(req,res){
        return res.render('search-results')
    },

}

module.exports = productsController;