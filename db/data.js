let listaProducts ={
    
    usuario : {
        nombre: 'Nacho',
        email:'mail@hotmalil.cmo',
        fotoDePerfil:'/images/users/default-image.png',
        contraseña:'nada',
        fechaDeNacimiento:'17/06/2004',
        dni:'4444444',
    },

    comentarios:[

        {
            Nombre:'Moria Casan',
            textoDelComentario: 'El decorado se calla.',
            fotoDePerfil:'/images/users/moriaCasan.png',
        },
        {
            Nombre:'Susana Gimenez',
            textoDelComentario: 'Lo amo!',
            fotoDePerfil:'/images/users/susanaGimenez.png',
        },
        {
            Nombre:'Ale Vivone',
            textoDelComentario: 'Me encantó este producto. Se lo voy a recomendar a todos mis amigos.',
            fotoDePerfil:'/images/users/aleVivone.png',
        },
        {
            Nombre:'Mery del Valle',
            textoDelComentario: 'El producto me llego en tiempo y forma. Lo que sí, me resultó bastante caro para lo que es.',
            fotoDePerfil:'/images/users/mery.jpg',
        },
        {
            Nombre:'Guillermo Francella',
            textoDelComentario: 'Me lo recomendó mi amigo Ale y me gustó mucho.',
            fotoDePerfil:'/images/users/guilleFrancella.png',
        },
    ],

    productos: [
        {
            id:1,
            nombre: 'Sillón Enriqueta',    
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen: '/images/products/sillonEnriqueta.png',
        },
        {
            id:2,
            nombre:'Sillón Duarte',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/sillonDuarte.jpg',
        },
        {
            id:3,
            nombre:'Puff Femina',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/puffFemina.jpg',
        },
        {
            id:4,
            nombre:'Velador Evican',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            prencio:'$200.000', 
            imagen:'/images/products/veladorEvican.png',
        },
        {
            id:5,
            nombre:'Alfombra Sair',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/alfombraSair.png',
        },
        {
            id:6,
            nombre:'Espejo Esmar',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/espejoEsmar.png',
        },
        {
            id:7,
            nombre:'Almohadón Fiodor',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/almohadonFiodor.png',
        },
        {
            id:8,
            nombre:'Almohadón Fiona',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/almohadonFiona.png',
        },
        {
            id:9,
            nombre:'Almohadón Fidas',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/almohadonFidas.png',
        },
        {
            id:10,
            nombre:'Alfombra Sabelio',
            descripcion:'No importaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            precio:'$200.000', 
            imagen:'/images/products/alfombraSabelio.png',
        }

       //falta comentarios
    ]
}

module.exports = listaProducts;