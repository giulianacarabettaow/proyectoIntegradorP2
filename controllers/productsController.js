
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
        let id = req.params.id
        let resultado = []

        for(let i=0; i<dbProduct.productos.length;i++){
            if(dbProduct.productos[i].id == id){
                resultado.push(dbProduct.productos[i])
            }
        }
        
        return res.render('products'); // ya se que para renderizar tengo que cambiar el SEND por un RENDER y pasar el archivo en el cual se renderiza y los parametros que tiene que tener en cuenta
    }
    
}

module.exports = productsController;
