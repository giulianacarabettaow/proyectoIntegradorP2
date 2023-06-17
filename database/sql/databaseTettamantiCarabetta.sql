-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2023 at 01:54 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `textoDelComentario` varchar(255) NOT NULL,
  `FkUsuariosId` int(11) DEFAULT NULL,
  `FkProductosId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `textoDelComentario`, `FkUsuariosId`, `FkProductosId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 1, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(2, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 1, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(3, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 1, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(4, 'Me encantó!!', 3, 1, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(5, 'Voy a hacer una denuncia a defensa del consumidor.', 6, 2, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(6, 'Me quiero comprar todo!!', 5, 2, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(7, 'Muy bueno este sillón.', 7, 2, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(8, 'No me termino de gustar el color', 4, 2, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(9, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 3, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(10, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 3, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(11, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 3, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(12, 'Me encantó!!', 3, 3, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(13, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 4, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(14, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 4, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(15, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 4, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(16, 'Me encantó!!', 3, 4, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(17, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 5, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(18, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 5, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(19, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 5, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(20, 'Me encantó!!', 3, 5, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(21, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 6, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(22, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 6, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(23, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 6, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(24, 'Me encantó!!', 3, 6, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(25, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 7, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(26, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 7, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(27, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 7, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(28, 'Me encantó!!', 3, 7, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(29, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 8, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(30, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 8, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(31, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 8, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(32, 'Me encantó!!', 3, 8, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(33, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 9, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(34, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 9, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(35, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 9, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(36, 'Me encantó!!', 3, 9, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(37, 'Este sillón quedó divino en mi cuarto, la calidad es realmente excelente.', 6, 10, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(38, 'La verdad me sorprendió mucho lo cómodo que es.', 5, 10, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(39, 'No me convenció la tela. De todas formas, es un lindo sillón', 4, 10, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(40, 'Me encantó!!', 3, 10, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(60, 'me encantó!', 29, 11, '2023-06-16 14:35:21', '2023-06-16 14:35:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `precio` varchar(255) NOT NULL,
  `FkUsuariosId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `imagen`, `precio`, `FkUsuariosId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Sillón Enriqueta', '\"Enriqueta\" es una pieza de mobiliario de alta calidad, con un diseño elegante y una comodidad excepcional.', 'sillonEnriqueta.png', '$200.000', 1, '2017-06-12 19:05:40', '2023-06-13 18:22:36', NULL),
(2, 'Sillón Duarte', 'El sillón \"Duarte\" es una pieza de mobiliario de alta calidad, diseñada especialmente para exteriores.', 'sillonDuarte.jpg', '$200.000', 2, '2022-06-12 19:05:40', '2023-06-13 13:25:43', NULL),
(3, 'Puff Femina', 'Este puff es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar.', 'puffFemina.jpg', '$200.000', 2, '2021-06-12 19:05:40', '2023-06-13 13:25:43', NULL),
(4, 'Velador Evican', 'El velador \"Evican\" es una pieza de mobiliario de alta calidad diseñada para complementar cualquier decoración de sala de estar.', 'veladorEvican.png', '$200.000', 1, '2020-06-12 19:05:40', '2023-06-13 13:27:58', NULL),
(5, 'Alfombra Sair', 'La alfombra \"Sair\" combina la calidez y la belleza natural de la madera con la suavidad y la pureza del color blanco.', 'alfombraSair.png', '$200.000', 4, '2019-05-20 19:05:40', '2023-06-15 18:03:54', NULL),
(6, 'Espejo Esmar', 'El diseño circular y moderno del espejo \"Esmar\" lo convierte en una pieza única y llamativa que puede ser utilizada para complementar cualquier decoración.', 'espejoEsmar.png', '$200.000', 2, '2021-06-20 19:05:40', '2023-06-13 13:27:58', NULL),
(7, 'Almohadón Fiodor', 'El almohadón \"Fiodor\" es un accesorio de decoración de alta calidad diseñado para aportar comodidad y estilo a cualquier sillón.', 'almohadonFiodor.png', '$200.000', 3, '2022-08-12 19:05:40', '2023-06-15 18:03:54', NULL),
(8, 'Almohadón Fiona', 'Con su color blanco puro y su forma rectangular, este almohadón es una adición atemporal y versátil para cualquier ambiente.', 'almohadonFiona.png', '$200.000', 1, '2018-10-12 19:05:40', '2023-06-13 18:20:39', NULL),
(9, 'Almohadón Fidas', 'El almohadón \"Fidas\" es un accesorio de decoración moderno y elegante diseñado para añadir comodidad y estilo a cualquier sillón.', 'almohadonFidas.png', '$200.000', 2, '2025-05-20 19:05:40', '2023-06-13 18:21:08', NULL),
(10, 'Alfombra Sabelio', 'Inspirada en la rica historia del antiguo Egipto, esta alfombra cuenta con una combinación única de colores blanco y madera.', 'alfombraSabelio.png', '$200.000', 2, '2026-01-15 19:05:40', '2023-06-13 18:21:08', NULL),
(11, 'Mi primer sillon', 'Este es mi primer sillon', 'cubreMaceta.png', '1000', 26, '2023-06-15 15:02:56', '2023-06-15 15:02:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `contr` varchar(255) NOT NULL,
  `fotoDePerfil` varchar(255) NOT NULL,
  `fechaDeNacimiento` date NOT NULL,
  `dni` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `nombre`, `contr`, `fotoDePerfil`, `fechaDeNacimiento`, `dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'nacho@gmail.com', 'Nacho Tettamanti', 'nachito2003', 'nachi.png', '2003-06-17', 44930935, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(2, 'giuliana@hotmail.com', 'Giuliana Carabetta', 'giu1234', 'img321.png', '2002-11-06', 44284034, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(3, 'merydelvalle@gmail.com', 'Maria', 'javascript11', 'mery.jpg', '1995-02-03', 30947612, '2023-06-12 19:05:40', '2023-06-14 17:19:40', NULL),
(4, 'juanchi@udesa.edu.ar', 'Juanchi', 'negociosdigitales', 'juanchi.avif', '2004-08-09', 4433452, '2023-06-12 19:05:40', '2023-06-14 17:19:40', NULL),
(5, 'soficaffaro@gmail.com', 'Sofia', 'creatupropiolook', 'sofita.jpeg', '2002-12-13', 44567892, '2023-06-12 19:05:40', '2023-06-14 17:22:02', NULL),
(6, 'carlimerener@udesa.ar', 'Carlota', 'garyloco', 'carli.jpeg', '2002-11-08', 65483940, '2023-06-12 19:05:40', '2023-06-14 17:22:02', NULL),
(7, 'alevivone@gmail.com', 'Alejandro', 'profedigital', 'alevivo.png', '1990-03-21', 36903427, '2023-06-12 19:05:40', '2023-06-12 19:05:40', NULL),
(25, 'fljsd@kfkkf', 'Giuli', '$2a$10$wO8CU2sin4Xkqy5Gq5evEOWCwqAhGZcSxn3ROHPJWWZggQ92ITSvK', '', '2023-06-30', 44284034, '2023-06-14 12:40:07', '2023-06-14 12:40:07', NULL),
(26, 'rochi@udesa.edu.ar', 'Ro', '$2a$10$pFKJIbHuwsbv7razC848w.xwZxk9WuWVlvmByRh9MEXtk8.cYUOkG', '', '2023-03-09', 32339390, '2023-06-14 14:46:44', '2023-06-14 14:46:44', NULL),
(27, 'tutu@gmail.com', 'Tutu', '$2a$10$320GMXkVzecs//CNr.DEqOH/eJvQyruuEW2Ng9XS3jXdhSlWJ3k9G', '', '2023-06-23', 22310343, '2023-06-15 13:35:47', '2023-06-15 13:35:47', NULL),
(28, '', '', '$2a$10$T/zQxEtgP.ErG0SYckrqEOp7oBpwb.KSQYk/YegRPEnOlZneGvtHG', '', '0000-00-00', 0, '2023-06-15 15:20:53', '2023-06-15 15:20:53', NULL),
(29, 'giannicarabetta2006@gmail.com', 'gianni', '$2a$10$IR8g.aNgmsEApr4KPWnaOepEpJJWcNf9NYCWQXjcUmhhJvvB0mw26', '', '2006-06-07', 47301058, '2023-06-16 14:32:56', '2023-06-16 14:32:56', NULL),
(30, 'gonza@gmail.com', 'Gonza', '$2a$10$5ZKpuikjgbDsbOnptPqg.unZ5wyKihHopg8S7fngJnFzL1MylPo/u', '/default-image.png', '2023-06-16', 29330402, '2023-06-16 16:09:53', '2023-06-16 16:09:53', NULL),
(31, 'solcho@gmail.com', 'Sol', '$2a$10$4rRANxuF1WSFYDTxrReVNuEPXBv65kRtb3zNvrzQMebwfPKNUiNW2', '/users/default-avatar-profile.jpg', '2021-02-15', 288202020, '2023-06-16 16:19:37', '2023-06-16 16:19:37', NULL),
(32, 'solcito@gmail.com', 'Solcito', '$2a$10$3ixZYM0xRdH34k8vEDV8../ooJSJfVb./ccCBgnxXqQyN1HQPynE.', '/default-image.png', '2022-12-01', 123403223, '2023-06-16 16:21:10', '2023-06-16 16:21:10', NULL),
(33, 'solc@udesa.com', 'Sol', '$2a$10$4RfO6Ek4/hb/niP1AmhYZeHw8xaBY6cpOskeGfozWN1R0.xfhd79q', '/default-image.png', '2023-06-09', 1020333, '2023-06-16 16:22:48', '2023-06-16 16:22:48', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FkUsuariosId` (`FkUsuariosId`),
  ADD KEY `FkProductosId` (`FkProductosId`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FkUsuariosId` (`FkUsuariosId`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`FkUsuariosId`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`FkProductosId`) REFERENCES `productos` (`id`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`FkUsuariosId`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
