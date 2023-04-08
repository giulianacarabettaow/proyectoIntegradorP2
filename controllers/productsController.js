
let dbProduct= require('../db/data')

let productsController = {

    index: function(req,res){
        return res.send(dbProduct)
    },

    add: function(req,res){
        return res.render('product-add') 
    },
    show: function(req,res){
        return res.render('search-results')
    },
    showProducts: function(req,res){
      return res.render('products', 
      {
        product: dbProduct.productos,
        comments: dbProduct.comments, // crear comments
        
      })
    }
    
}

module.exports = productsController;
