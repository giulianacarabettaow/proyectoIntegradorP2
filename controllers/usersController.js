let dbUsers= require('../db/data')
//esto es lo nuevo, habría que ver si corregimos los métodos del controlador
//const db = require('../database/models')
//const userModel= db.User


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
    }
    //processRegister: function(req,res){
       // db.User.findOne({ //pedido asincronico
         //   where: [
        //        {email: req.body.email},
               // {dni: req.body.dni}
         //   ]
      //  })
       // .then((result)=>{ 
         //   if (result != null){ //si existe un mail registrado
                //entonces quiero que veas un mensaje de que ya estas registrado
        //    }
      //  }
     //   )
  //  },
}


module.exports = usersController;

