//let db = require('../db/data')
let dbProduct= require('../db/data')

let productsController = {

    index: function(req,res){
        return res.send('index')
    },

    add: function(req,res){
        return res.render('product-add') 
    },
    show: function(req,res){
        return res.render('search-results')
    },
    showProducts: function(req,res){
        return res.render('products', {productUnique: dbProduct.productos})
    }

}

module.exports = productsController;
