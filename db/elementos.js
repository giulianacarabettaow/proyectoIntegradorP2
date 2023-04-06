//aca hay que escribir la información de los productos que vamos a vender
let listaProductos ={
    lista: [
        {
        id: 1,
        nombre: "Vela Roma",
        categ: "Velas aromáticas",
        precio: "$5.000",
        descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis elementum massa. Proin mauris augue, maximus a nibh in, consectetur iaculis neque. Morbi quis ultricies neque. Suspendisse sed pellentesque purus, ac pretium tortor.  ",
        img: function(req, res){
            require('../public/images/products/alfombra-blanca.jpg')
        },
        },
        {
        id: 2,
        nombre: "Vela Turín",
        categ: "Velas aromáticas",
        precio: "$5.500",
        descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis elementum massa. Proin mauris augue, maximus a nibh in, consectetur iaculis neque. Morbi quis ultricies neque. Suspendisse sed pellentesque purus, ac pretium tortor.  "
        },
        {
        id: 3,
        nombre: "Plumón Danés",
        categ: "Ropa de cama",
        precio: "$100.000",
        descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis elementum massa. Proin mauris augue, maximus a nibh in, consectetur iaculis neque. Morbi quis ultricies neque. Suspendisse sed pellentesque purus, ac pretium tortor.  "
        },
        {
        id: 4,
        nombre: "Juego de sábanas Danés",
        categ: "Ropa de cama",
        precio: "$80.000",
        descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis elementum massa. Proin mauris augue, maximus a nibh in, consectetur iaculis neque. Morbi quis ultricies neque. Suspendisse sed pellentesque purus, ac pretium tortor.  "
        },
        {
        id: 5,
        nombre: "Maceta Tailandia",
        categ: "Botánicos",
        precio: "$10.000",
        descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis elementum massa. Proin mauris augue, maximus a nibh in, consectetur iaculis neque. Morbi quis ultricies neque. Suspendisse sed pellentesque purus, ac pretium tortor.  "
        },  
        {
        id: 6,
        nombre: "Maceta colgante Malasia",
        categ: "Botánicos",
        precio: "$8.000",
        descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis elementum massa. Proin mauris augue, maximus a nibh in, consectetur iaculis neque. Morbi quis ultricies neque. Suspendisse sed pellentesque purus, ac pretium tortor.  "
        }, 
    ]
}

module.exports = listaProductos; 