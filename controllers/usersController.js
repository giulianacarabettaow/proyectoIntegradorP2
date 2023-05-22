let dbUsers= require('../db/data')

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
    
        return res.render('profile', {users: dbUsers.usuario , products: dbUsers.productos})
        
    },
    edit: function(req,res){
        return res.render('profileEdit', {users: dbUsers.usuario})
    },
    register: function(req,res){
        return res.render('register')
    }, 
}


module.exports = usersController;

