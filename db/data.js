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
            descripcion:'"Enriqueta" es una pieza de mobiliario de alta calidad, con un diseño elegante y una comodidad excepcional. Su combinación de madera natural y color blanco puro lo hace ideal para cualquier espacio que busque una sensación de frescura, limpieza y tranquilidad.',
            precio:'$200.000', 
            imagen: '/images/products/sillonEnriqueta.png',
        },
        {
            id:2,
            nombre:'Sillón Duarte',
            descripcion:'El sillón "Duarte" es una pieza de mobiliario de alta calidad, diseñada especialmente para exteriores. Su elegante diseño combina la belleza natural de la madera con la frescura y limpieza del color blanco, lo que lo convierte en un complemento ideal para cualquier espacio al aire libre.',
            precio:'$200.000', 
            imagen:'/images/products/sillonDuarte.jpg',
        },
        {
            id:3,
            nombre:'Puff Femina',
            descripcion:'El sillón "Femina" es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar. Su elegante diseño combina la belleza natural de la madera con la frescura y limpieza del color blanco, lo que lo convierte en un complemento ideal para cualquier hogar.',
            precio:'$200.000', 
            imagen:'/images/products/puffFemina.jpg',
        },
        {
            id:4,
            nombre:'Velador Evican',
            descripcion:'El velador "Evican" es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar de nivel alto. Su elegante diseño combina la belleza natural de la madera con la simplicidad y elegancia de su forma, lo que lo convierte en un complemento ideal para cualquier hogar.',
            prencio:'$200.000', 
            imagen:'/images/products/veladorEvican.png',
        },
        {
            id:5,
            nombre:'Alfombra Sair',
            descripcion:'La alfombra "Sair" es una pieza de decoración de alta calidad diseñada para añadir un toque de elegancia y sofisticación a cualquier sala de estar. Su diseño combina la calidez y la belleza natural de la madera con la suavidad y la pureza del color blanco, lo que la convierte en una adición perfecta para cualquier hogar.',
            precio:'$200.000', 
            imagen:'/images/products/alfombraSair.png',
        },
        {
            id:6,
            nombre:'Espejo Esmar',
            descripcion:'El espejo "Esmar" es una pieza de decoración de alta calidad diseñada para añadir un toque de elegancia y sofisticación a cualquier interior. Su diseño circular y moderno lo convierte en una pieza única y llamativa que puede ser utilizada para complementar cualquier decoración.',
            precio:'$200.000', 
            imagen:'/images/products/espejoEsmar.png',
        },
        {
            id:7,
            nombre:'Almohadón Fiodor',
            descripcion:'El almohadón "Fiodor" es un accesorio de decoración de alta calidad diseñado para aportar comodidad y estilo a cualquier sillón. Con su color blanco puro y su forma cuadrada, este almohadón es una adición elegante y sofisticada para cualquier ambiente.',
            precio:'$200.000', 
            imagen:'/images/products/almohadonFiodor.png',
        },
        {
            id:8,
            nombre:'Almohadón Fiona',
            descripcion:'El almohadón "Fiona" es un accesorio de decoración elegante y sofisticado diseñado para añadir comodidad y estilo a cualquier sillón. Con su color blanco puro y su forma rectangular, este almohadón es una adición atemporal y versátil para cualquier ambiente.',
            precio:'$200.000', 
            imagen:'/images/products/almohadonFiona.png',
        },
        {
            id:9,
            nombre:'Almohadón Fidas',
            descripcion:'El almohadón "Fidas" es un accesorio de decoración moderno y elegante diseñado para añadir comodidad y estilo a cualquier sillón. Con su color blanco puro y su forma cuadrada, este almohadón es una adición atemporal y versátil para cualquier ambiente.',
            precio:'$200.000', 
            imagen:'/images/products/almohadonFidas.png',
        },
        {
            id:10,
            nombre:'Alfombra Sabelio',
            descripcion:'La alfombra "Sabelio" es un impresionante accesorio de decoración que añade un toque de elegancia y estilo a cualquier ambiente. Inspirada en la rica historia del antiguo Egipto, esta alfombra cuenta con una combinación única de colores blanco y madera, que le dan un aspecto sofisticado y exótico.',
            precio:'$200.000', 
            imagen:'/images/products/alfombraSabelio.png',
        }

    ]
}

module.exports = listaProducts;