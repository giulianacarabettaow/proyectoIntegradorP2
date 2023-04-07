let usersController={
    index: function(req,res){
        return res.send('anda user index')
    },
    login: function(req,res){
        return res.send('anda login')
    },
    show: function(req,res){
        return res.send('anda logueado, aca va header logueado')
    },
    showProfile: function(req,res){
        return res.send('anda profile')
    },
    edit: function(req,res){
        return res.send('anda edit profile')
    },
    register: function(req,res){
        return res.send('anda register')
    }, 
}

module.exports = usersController;