DROP SCHEMA DB;
CREATE SCHEMA DB;

USE DB;

CREATE TABLE usuarios (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	email VARCHAR (255) NOT NULL UNIQUE,
    nombre VARCHAR (255) NOT NULL,
    contr VARCHAR (255) NOT NULL,
    fotoDePerfil VARCHAR (255) NOT NULL,
    fechaDeNacimiento DATE NOT NULL,
    dni INT NOT NULL,
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
    
    );

CREATE TABLE productos (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (255) NOT NULL,
    descripcion VARCHAR (255) NOT NULL,
    imagen VARCHAR (255) NOT NULL,
    precio VARCHAR (255) NOT NULL,
    FkUsuariosId INT,
    FOREIGN KEY (FkUsuariosId) REFERENCES usuarios (id),

	    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
);

CREATE TABLE comentarios (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	textoDelComentario VARCHAR (255) NOT NULL,
    FkUsuariosId INT,
    FOREIGN KEY (FkUsuariosId) REFERENCES usuarios (id),
	FkProductosId INT,
    FOREIGN KEY (FkProductosId) REFERENCES productos (id),
    
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL
    
);

INSERT INTO usuarios (email, nombre, contr, fotoDePerfil, fechaDeNacimiento, dni)
VALUES ('nacho@gmail.com', 'Nacho Tettamanti', 'nachito2003', 'nachi.png', '2003-06-17', 44930935),
('giuliana@hotmail.com', 'Giuliana Carabetta', 'giu1234', 'img321.png', '2002-11-06', 44284034),
('merydelvalle@gmail.com', 'Maria', 'javascript11', 'juaesd.png', '1995-02-03', 30947612),
('juanchi@udesa.edu.ar', 'Juanchi', 'negociosdigitales', 'juanchi.png', '2004-08-09', 4433452),
('soficaffaro@gmail.com', 'Sofia', 'creatupropiolook', 'sofita.png', '2002-12-13', 44567892),
('carlimerener@udesa.ar', 'Carlota', 'garyloco', 'carli.png', '2002-11-08', 65483940),
('alevivone@gmail.com', 'Alejandro', 'profedigital', 'alevivo.png', '1990-03-21', 36903427);

INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Sillón Enriqueta', '"Enriqueta" es una pieza de mobiliario de alta calidad, con un diseño elegante y una comodidad excepcional.', 'sillonEnriqueta.png', '$200.000', 1),
('Sillón Duarte', 'El sillón "Duarte" es una pieza de mobiliario de alta calidad, diseñada especialmente para exteriores.', 'sillonDuarte.jpg', '$200.000', 2),
('Puff Femina', 'Este puff es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar.', 'puffFemina.jpg', '$200.000', 2),
('Velador Evican', 'El velador "Evican" es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar.', 'veladorEvican.png', '$200.000', 1),
('Alfombra Sair', 'La alfombra "Sair" combina la calidez y la belleza natural de la madera con la suavidad y la pureza del color blanco.', 'alfombraSair.png', '$200.000', 1),
('Espejo Esmar', 'El diseño circular y moderno del espejo "Esmar" lo convierte en una pieza única y llamativa que puede ser utilizada para complementar cualquier decoración.', 'espejoEsmar.png', '$200.000', 2),
('Almohadón Fiodor', 'El almohadón "Fiodor" es un accesorio de decoración de alta calidad diseñado para aportar comodidad y estilo a cualquier sillón.', 'almohadonFiodor.png', '$200.000', 2),
('Almohadón Fiona', 'Con su color blanco puro y su forma rectangular, este almohadón es una adición atemporal y versátil para cualquier ambiente.', 'almohadonFiona.png', '$200.000', 1),
('Almohadón Fidas', 'El almohadón "Fidas" es un accesorio de decoración moderno y elegante diseñado para añadir comodidad y estilo a cualquier sillón.', 'almohadonFidas.png', '$200.000', 2),
('Alfombra Sabelio', 'Inspirada en la rica historia del antiguo Egipto, esta alfombra cuenta con una combinación única de colores blanco y madera.', 'alfombraSabelio.png', '$200.000', 2);

INSERT INTO comentarios (textoDelComentario, FkUsuariosId, FkProductosId)
VALUES ('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 1),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 1),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 1),
('Me encantó!!', 3, 1),
('Voy a hacer una denuncia a defensa del consumidor.', 6, 2),
('Me quiero comprar todo!!', 5, 2),
('Muy bueno este sillón.', 7, 2),
('No me termino de gustar el color', 4, 2),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 3),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 3),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 3),
('Me encantó!!', 3, 3),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 4),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 4),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 4),
('Me encantó!!', 3, 4),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 5),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 5),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 5),
('Me encantó!!', 3, 5),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 6),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 6),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 6),
('Me encantó!!', 3, 6),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 7),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 7),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 7),
('Me encantó!!', 3, 7),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 8),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 8),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 8),
('Me encantó!!', 3, 8),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 9),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 9),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 9),
('Me encantó!!', 3, 9),
('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 10),
('La verdad me sorprendió mucho lo cómodo que es.', 5, 10),
('No me convenció la tela. De todas formas, es un lindo sillón', 4, 10),
('Me encantó!!', 3, 10);





