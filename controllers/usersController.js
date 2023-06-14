const db = require('../database/models')
const comments = db.Comentario
const users = db.Usuario

const bcrypt = require('bcryptjs'); //requiero el modulo instalado para hashing
const { use } = require('../routes');

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
            return res.redirect('/')
        } else{
            return res.render('login')
        }
    },

    processLogin: function(req,res){
        let info={
             nombre: req.body.username,
             contr: req.body.password
          } 
          let errors = {}
        
          if (info.nombre == ''){
            errors.message = 'Debes ingresar tu nombre de usuario'
            res.locals.errors = errors;
            return res.render('login')
          }
          else if (info.contr == ''){
            errors.message = 'Debes ingresar tu contrseña'
            res.locals.errors = errors;
            return res.render('login')
          }
          else{
            users.findOne({where:[
                    {nombre:info.nombre}
                ]
            }) 
            .then(function(userLogged){

            if(userLogged != null){
                     let encripted = bcrypt.compareSync(info.contr,userLogged.contr) 
                     if (encripted){

                     req.session.user=userLogged;

                     if (req.body.remember != undefined) {
                         res.cookie('recordarme', userLogged.dataValues.id, {maxAge : 1000 * 60 *60 } )
                     }
                     //return res.send (req.session)
                     return res.redirect("/")
                  }
                    else {
                         errors.message = "El usuario existe, pero la contraseña es incorrecta";
                         res.locals.errors = errors;
                         return res.render('login');
                     }
                 }
                
            else{
                     errors.message = 'El usuario no existe'
                     res.locals.errors = errors
                     return res.render('login')
                }

                // cujando ponen req.session.user= pongo la varuable q va a subir el usuario 
                

                
            })

            .catch(function(error){
                console.log(error)
            })
          }
        
        // return res.redirect('/users/profile/:id') //y ese ID de donde lo sacamos? cual es? create, update o demas. Comparar con la base de datos
     },
  
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('recordarme');
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
        let form = req.body;
        let contrHasheada =bcrypt.hashSync(req.body.password, 10);
        let newUser = {
                        email: form.email,
                        nombre: form.username,
                        contr: contrHasheada,
                        fotoDePerfil:form.fotoPerfil,
                        fechaDeNacimiento:form.fechaNacimiento,
                        dni:form.dni
                    }
                    users.create(newUser) 

                    .then(function(created){
                        return res.redirect('/users/login')
                        //return res.send(created)
                        //return res.send('Ro')
                    })
                    .catch(function(error){
                        console.log('El error es: ' + error)
                    });
                }   
}

//cierra el modulo del controlador


module.exports = usersController;