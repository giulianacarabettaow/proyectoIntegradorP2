const db = require('../database/models')
const comments = db.Comentario
const users = db.Usuario
const op = db.Sequelize.Op;

const bcrypt = require('bcryptjs'); //requiero el modulo instalado para hashing
const { use } = require('../routes');

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
        
          if (req.body.username == ''){
            errors.message = 'Debes ingresar tu nombre de usuario'
            res.locals.errors = errors;
            return res.render('login')
          }
          else if (req.body.password == ''){
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

                     req.session.user=userLogged

                     if (req.body.remember != undefined) {
                          res.cookie('recordarme', userLogged.id, {maxAge : 1000 * 60 *60 } )
                     }
                     
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
            })
            .catch(function(error){
                console.log(error)
            })
          }
     },
  
    logout: function(req, res){
        let aDestruir = req.session
        
        aDestruir.destroy();
        res.clearCookie('recordarme');
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
                    include: ["comentarios"],
                                    },
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
        let errors = {}

        let filter = {where : [
            {email: form.email},
        ]};

        users.findOne(filter)

        .then(function(resultado){
        if(resultado != null){
            errors.message = 'Este email ya está en uso'
            res.locals.errors = errors;
            return res.render('register')
        }
        else{
            
            if (form.email == ''){
                errors.message= 'Debes ingresar un email'
                res.locals.errors = errors;
                return res.render('register')
            }

            else if (form.fechaNacimiento == ''){
                errors.message = 'Debes ingresar tu fecha de nacimiento'
                res.locals.errors = errors;
                return res.render('register')
            }
    
            else if (form.dni == ''){
                errors.message = 'Debes ingresar tu DNI'
                res.locals.errors = errors;
                return res.render('register')
            }

            else if (form.username == ''){
                errors.message = 'Debes ingresar un nombre de usuario '
                res.locals.errors = errors;
                return res.render('register')
            }

            else if (form.password == ''){
                errors.message = 'Debes ingresar una contraseña'
                res.locals.errors = errors;
                return res.render('register')
            }

            else if(form.password.length < 3){
                errors.message = 'La contreseña debe ser de más de 3 dígitos o letras'
                res.locals.erros = errors;
                return res.render('register')
            }
    
            else{
                let contrHasheada =bcrypt.hashSync(req.body.password, 10);
                let newUser = {
                        email: form.email,
                        nombre: form.username,
                        contr: contrHasheada,
                        fotoDePerfil:form.fotoPerfil, //aca habría que modificar si hacemos el adic de foto de perifl (haciendo un if abajo)
                        fechaDeNacimiento:form.fechaNacimiento,
                        dni:form.dni,
                        createdAt: new Date()
                    }
                        users.create(newUser) 
        
                        .then(function(created){
                            return res.redirect('/users/login')
                                
                        })
                        .catch(function(error){
                            console.log('El error es: ' + error)
                        });   
                }
            }
       
        })
    },

    searchUsuarios: function(req,res){
        let usuarioBuscado = req.query.searchUsuarios
        
        users.findAll({
        where:{
            [op.or]: [
            {nombre: {[op.like]: `%${usuarioBuscado}%` }},
            {email: {[op.like]: `%${usuarioBuscado}%`}}
        ]},
        order:[['createdAt', 'DESC']] ,
        include: [
            {association:"productos"},
            {association:"comentarios"}
        ]}
    )

    .then (function(resultadoDeBusqueda){
        //return res.send(resultadoDeBusqueda)
       return res.render('search-results-usuarios', {usuario:resultadoDeBusqueda})
    })

    .catch(function(error){
        console.log('El error es: ' + error)
    });

    }
}

//cierra el modulo del controlador


module.exports = usersController;