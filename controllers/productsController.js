let productsController = {
    index: function(req,res){
        return res.send('anda products')
    },
    add: function(req,res){
        return res.send('anda add')
    },
    show: function(req,res){
        return res.send('anda search results')
    },

}

module.exports = productsController;