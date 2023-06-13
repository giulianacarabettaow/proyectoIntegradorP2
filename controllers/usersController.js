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

    processLogin: function(req,res){
        let info={
             nombre: req.body.username,
             contr: req.body.password
          } 

        req.session.user=info

        return res.send (req.session)
        
        // return res.redirect('/users/profile/:id') //y ese ID de donde lo sacamos? cual es? create, update o demas. Comparar con la base de datos
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

  
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie(usuarioId);
        return res.redirect('/')
    },
    show: function(req,res){
        return res.render('partials/headerLogueado')
    },
    showProfile: function(req,res){ //anda por url 
       let idUser = req.params.id
        let relaciones = {
            include: [
                {association: "productos",
                    include: ["comentarios"]},
                {association: "comentarios"}
            ]
        }
        users.findByPk(idUser, relaciones)
        .then(function(resultado){
            let infoUsuario = {
                id: resultado.id,
                email: resultado.email,
                nombre: resultado.nombre,
                fotoDePerfil: resultado.fotoDePerfil,
                fechaDeNacimiento: resultado.fechaDeNacimiento,
                productos: resultado.productos,
                comentarios: resultado.comentarios,
            }
            return res.render('profile', {infoUsuario: infoUsuario})
            //return res.send(resultado)
        })
        .catch((error)=>{
            return console.log(error)
        })
        
    },
    edit: function(req,res){
        //return res.render('profileEdit', {users: dbUsers.usuario})
    },
    register: function(req,res){
        return res.render('register')
    },

    processRegister: function(req,res){ //no anda todavia bien pero trae la data 
       
        let userData = req.body
        users.findOne( {where: 
            [{email: userData.email}]//,
           // { dni: userData.dni}] 
        })
        .then(function(createdUser){
            let errors= {};
             if (createdUser != undefined){ //si existe un mail registrado
                 errors.message= "Este email ya fue registrado"
                 res.locals.errors= errors   //entonces quiero que veas un mensaje de que ya estas registrado
                 return res.render('register');
             } else{  //MENSAJES DE ERROR PARA LOS USUARIOS
                if(req.body.dni == ''){ 
                    errors.message = "Debes ingresar tu D.N.I." //aviso al usuario
                    res.locals.errors = errors
                    return res.render('register') 
                } 
                else if (req.body.fechaDeNacimiento == ''){
                    errors.message= "Debes ingresar tu fecha de nacimiento" 
                    res.locals.errors= errors   
                    return res.render('register')
                } else if(req.body.nombre== ''){
                    errors.message= "Debes ingresar tu nombre"
                    res.locals.errors= errors   
                    return res.render('register')
                } else if(req.body.email== ''){
                    errors.message= "Debes ingresar un email" 
                    res.locals.errors= errors   
                    return res.render('register')
                } else if(req.body.contr== ''){
                    errors.message= "Debes ingresar una contraseña" 
                    res.locals.errors= errors   
                    return res.render('register')
                } //else if(req.body.contr.length < 3){
                   //  errors.message= "La contraseña debe contener más de 3 caracteres" 
                   //  res.locals.errors= errors   
                    // return res.render('register')
                //} 
                else{
                    //let contrHasheada = bcrypt.hashSync(req.body.contr, 10)
                    
                    let form = req.body
                    let newUser = {
                        nombre: form.username,
                        email: form.email,
                        contr: form.password,
                        fechaDeNacimiento:form.fechaNacimiento,
                        fotoDePerfil:form.fotoPerfil,
                        dni:form.dni
                    }
                    // if (req.file != undefined){ //ver el req.file
                    //     datosDelUsuario.fotoDePerfil = req.file.filename
                    //     } else {
                    //     datosDelUsuario.fotoDePerfil = 'default_avatar.png'
                    //     }
                    users.create(newUser)

                    .then(function(created){
                        return res.send(created)
                        //return res.redirect('/user/login')
                    })
                    .catch(function(error){
                        console.log('El error es: ' + error)
                    });

                    }    
             }    
        })

        .catch(function(error){
            console.log(error)
        })
    }

}//cierra el modulo del controlador


module.exports = usersController;