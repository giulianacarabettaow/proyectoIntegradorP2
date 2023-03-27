let searchController = {
    search: function(req,res){
        return res.send('search');
    },

    results: function(req,res){
        return res.send('results')
    }
}

module.exports = searchController;