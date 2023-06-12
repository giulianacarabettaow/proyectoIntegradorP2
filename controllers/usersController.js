//let dbUsers= require('../db/data')
//esto es lo nuevo, habría que ver si corregimos los métodos del controlador
const db = require('../database/models')
const comments = db.Comentario
const users = db.Usuario

const bcrypt = require('bcryptjs'); //requiero el modulo instalado para hashing

// este no servia para nada entonces lo use para chequear q no me trae data (a mi, nacho) de la DB de comentarios
let usersController={
    index: function(req,res){
        comments.findAll()
        .then(function(comentarios){
            return res.send(comentarios)
        })
    },
    login: function(req,res){
        if (req.session.user != undefined){
            return res.redirect('profile')
        } else{
            return res.render('login')
        }
    },
//      processLogin: function(req,res){
//          let errors = {}; //objeto vacío al que le agregamos métodos
//          if (req.body.email ==''){
//              errors.message = 'Debes ingresar tu email'; //message es un método de errors
//              res.locals.errors= errors; //asi pasamos el error a la vista
            
//             return res.render('login'); //vuelve al login
//          } else if(req.body.contr == ''){
//              errors.message = 'Debes ingresar tu contraseña';
//              res.locals.errors= errors;
//              return res.render('login');
//          }else{
//              db.Usuario.findOne({
//                  where: [
//                      {email: req.body.email}
//                  ]})
//             .then((resultado)=>{
//                  if (resultado != null){ //condicional anidado
//                      let check = bcrypt.compareSync(req.body.contr, contrHasheada) //si hay coincidencia con el mail, comparar la contraseña con el hash
//                      if(check == true){
//                          req.session.usuario = resultado.dataValues;
//                          if(req.body.recuerdame != undefined){
//                              res.cookie('usuarioId', resultado.dataValues.id, {maxAge : 1000* 60 * 5 })
//                          }
//                          return res.redirect('profile'); //si el usuario existe, redirigir al perfil
//                      } else {
//                              errors.message = 'La contraseña es incorrecta'; 
//                              res.locals.errors=errors;
//                              return res.render ('login');}
//                  } else{
//                      errors.message= 'Este usuario no se encuentra registrado'; //en las vistas podemos hacer un condicional para que, junto con este mensaje muestre un link a la página de registro
//                      res.locals.errors=errors;
//                      return res.render('login');
//                  }
//              })
//          .catch(function(error){
//              console.log(error);
//          })
//      }
//  },

    processLogin: function(req,res){
         let info= req.body

         return res.send (info)
     },

    logout: function(req, res){
        req.session.destroy();
        res.clearCookie(usuarioId);
        return res.redirect('/')
    },
    show: function(req,res){
        return res.render('partials/headerLogueado')
    },
    showProfile: function(req,res){
       let idUser = req.params.id
        let relaciones = {
            include: [
                {association: "productos",
                    include: "comentarios"}
            ]
        }
        users.findByPk(idUser, relaciones)
        .then(function(resultado){
            return res.send(resultado)
        })
        
    },
    edit: function(req,res){
        //return res.render('profileEdit', {users: dbUsers.usuario})
    },
    register: function(req,res){
        return res.render('register')
    },
    processRegister: function(req,res){          
        db.Usuario.findOne({ //pedido asincronico
            where: [{email: req.body.email}]
        })
        .then((result)=>{ 
            let errors= {};
            if (result != undefined){ //si existe un mail registrado
                errors.message= "Este email ya fue registrado"; 
                res.locals.errors= errors.message;   //entonces quiero que veas un mensaje de que ya estas registrado
                return res.render('register');
            }else{  //MENSAJES DE ERROR PARA LOS USUARIOS
                    if(req.body.dni){ 
                        errors.message = "Debes ingresar tu D.N.I."; //aviso al usuario
                        res.locals.errors = errors.message;
                        return res.render('register');
                    } else if(req.body.email== ''){
                        errors.message= "Debes ingresar un email"; 
                        res.locals.errors= errors.message;   
                        return res.render('register');
                    } else if(req.body.fechaDeNacimiento== ''){
                        errors.message= "Debes ingresar tu fecha de nacimiento"; 
                        res.locals.errors= errors.message;   
                        return res.render('register');
                    } else if(req.body.nombre== ''){
                        errors.message= "Debes ingresar tu nombre"; 
                        res.locals.errors= errors.message;   
                        return res.render('register');
                    } else if(req.body.email== ''){
                        errors.message= "Debes ingresar un email"; 
                        res.locals.errors= errors.message;   
                        return res.render('register');
                    } else if(req.body.contr== ''){
                        errors.message= "Debes ingresar una contraseña"; 
                        res.locals.errors= errors.message;   
                        return res.render('register');
                    } else if(req.body.contr.length < 3){
                        errors.message= "La contraseña debe contener más de 3 caracteres"; 
                        res.locals.errors= errors.message;   
                        return res.render('register');
                    } else{
                        let contrHasheada = bcrypt.hashSync(req.body.contr, 10 );
                        if (req.file != undefined){
                            datosDelUsuario.fotoDePerfil = req.file.filename
                        }else{
                            datosDelUsuario.fotoDePerfil = 'default_avatar.png'
                        }
                        db.Usuario.create(
                            {
                                email: req.body.email,
                                nombre: req.body.nombre,
                                contr: contrHasheada,
                                fotoDePerfil: '',
                                fechaDeNacimiento: req.body.fechaDeNacimiento,
                                dni: req.body.dni,
                                createdAt: req.body.createdAt,
                            })
                        .then((result)=>{
                            return res.redirect('profile')
                        })
                        .catch((error)=>{
                            console.log(error)
                        });

                    }
                } //cierra el else grande
            }) 
            .catch((error)=>{
                console.log(error)
            }) 
    },


} //cierra el modulo del controlador


module.exports = usersController;