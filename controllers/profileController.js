let profileController = {
    profile: function(req,res){
        return res.send ('hola')
    },
    edit: function(req, res){
        return res.send ('quetal')
    },
}
module.exports= profileController;