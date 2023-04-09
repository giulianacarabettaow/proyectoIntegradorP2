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
        return res.render('profile', {users: dbUsers.usuario})
    },
    edit: function(req,res){
        return res.render('profile-edit')
    },
    register: function(req,res){
        return res.render('register')
    }, 
}

///app.get('/profile-edit', (req, res)=> {
  //  let user = {
 //     username: '',
 //     email: '',
 //     dni: '',
 //     fotoPerfil: '',
 //     password:'',
 //     fechaNacimiento:'',
 //   };
  //})

module.exports = usersController;
//module.exports = app;
