let usersController={
    index: function(req,res){
        return res.send('anda user index')
    },
    login: function(req,res){
        return res.render('login')
    },
    show: function(req,res){
        return res.render('partials/headerLogueado')
    },
    showProfile: function(req,res){
        return res.render('profile')
    },
    edit: function(req,res){
        return res.render('profile-edit')
    },
    register: function(req,res){
        return res.render('register')
    }, 
}

module.exports = usersController;