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
	textoDelComentario VARCHAR (255) NOT NULL UNIQUE,
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
VALUES ('Sillón Enriqueta', '"Enriqueta" es una pieza de mobiliario de alta calidad, con un diseño elegante y una comodidad excepcional.', 'sillonEnriqueta.png', '$200.000', '1');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Sillón Duarte', 'El sillón "Duarte" es una pieza de mobiliario de alta calidad, diseñada especialmente para exteriores.', 'sillonDuarte.jpg', '$200.000', '2');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Puff Femina', 'Este puff es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar.', 'puffFemina.jpg', '$200.000', '2');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Velador Evican', 'El velador "Evican" es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar.', 'veladorEvican.png', '$200.000', '1');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Alfombra Sair', 'La alfombra "Sair" combina la calidez y la belleza natural de la madera con la suavidad y la pureza del color blanco.', 'alfombraSair.png', '$200.000', '1');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Espejo Esmar', 'El diseño circular y moderno del espejo "Esmar" lo convierte en una pieza única y llamativa que puede ser utilizada para complementar cualquier decoración.', 'espejoEsmar.png', '$200.000', '2');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Almohadón Fiodor', 'El almohadón "Fiodor" es un accesorio de decoración de alta calidad diseñado para aportar comodidad y estilo a cualquier sillón.', 'almohadonFiodor.png', '$200.000', '2');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Almohadón Fiona', 'Con su color blanco puro y su forma rectangular, este almohadón es una adición atemporal y versátil para cualquier ambiente.', 'almohadonFiona.png', '$200.000', '1');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Almohadón Fidas', 'El almohadón "Fidas" es un accesorio de decoración moderno y elegante diseñado para añadir comodidad y estilo a cualquier sillón.', 'almohadonFidas.png', '$200.000', '2');
INSERT INTO productos (nombre, descripcion, imagen, precio, FkUsuariosId)
VALUES ('Alfombra Sabelio', 'Inspirada en la rica historia del antiguo Egipto, esta alfombra cuenta con una combinación única de colores blanco y madera.', 'alfombraSabelio.png', '$200.000', '2');

INSERT INTO comentarios (textoDelComentario, FkUsuariosId, FkProductosId)
VALUES ('Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', '6', '1');
INSERT INTO comentarios (textoDelComentario, FkUsuariosId, FkProductosId)
VALUES ('La verdad me sorprendió mucho lo cómodo que es.', '5', '1');
INSERT INTO comentarios (textoDelComentario, FkUsuariosId, FkProductosId)
VALUES ('No me convenció la tela. De todas formas, es un lindo sillón', '4', '1');
INSERT INTO comentarios (textoDelComentario, FkUsuariosId, FkProductosId)
VALUES ('Me encantó!!', '3', '1')


