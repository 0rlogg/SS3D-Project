-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-12-2022 a las 18:05:46
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemasolar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'Admin', '150697Abc', 'admin@admin.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Estrellas`
--

CREATE TABLE `Estrellas` (
  `id` int(100) NOT NULL,
  `nombreestrella` varchar(2500) NOT NULL,
  `descripcion` varchar(2500) NOT NULL,
  `textura` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Estrellas`
--

INSERT INTO `Estrellas` (`id`, `nombreestrella`, `descripcion`, `textura`) VALUES
(6, 'Sol', 'El sol', '8k_sun.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Planetas`
--

CREATE TABLE `Planetas` (
  `id` int(100) NOT NULL,
  `nombre` varchar(2500) NOT NULL,
  `descripcion` varchar(2500) NOT NULL,
  `textura` varchar(2500) NOT NULL,
  `numsatelites` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Planetas`
--

INSERT INTO `Planetas` (`id`, `nombre`, `descripcion`, `textura`, `numsatelites`) VALUES
(1, 'Mercurio', 'Mercurio es el planeta más pequeño y más cercano al Sol en el sistema solar. A pesar de su tamaño, es el segundo planeta más denso del sistema solar después de la Tierra. Tiene una superficie áspera y sin atmósfera, lo que significa que está expuesto a la radiación solar directa y a las temperaturas extremas. Mercurio es conocido por tener una órbita muy elíptica alrededor del Sol, lo que significa que a veces está mucho más cerca del Sol que en otras ocasiones. También es un planeta de contrastes, ya que tiene zonas muy oscuras y otras muy brillantes.', '8k_mercury.jpg', 0),
(2, 'Venus', 'Venus es el segundo planeta del sistema solar y es conocido por ser el más caliente. Esto se debe a su atmósfera densa y cargada de dióxido de carbono, lo que hace que el efecto invernadero sea muy potente en Venus. Además, Venus gira en sentido contrario a la mayoría de los planetas del sistema solar y tarda más tiempo en dar una vuelta completa alrededor del Sol que cualquier otro planeta. Su superficie está cubierta de volcanes y montañas y es muy similar a la de la Tierra en términos de tamaño y composición. Sin embargo, debido a su atmósfera densa y opaca, es muy difícil ver su superficie desde el espacio.', '8k_venus_surface.jpg', 0),
(3, 'Tierra', 'La Tierra es el tercer planeta del sistema solar y el único conocido por albergar vida. Es un planeta rocoso con una atmósfera y un océano líquido, y está rodeado por una capa de aire que protege a la vida en la superficie del planeta de la radiación solar peligrosa. La Tierra es el hogar de millones de especies de plantas y animales, y es un lugar único en el universo conocido por tener condiciones ideales para la vida tal como la conocemos. La Tierra es el hogar de la humanidad y ha sido un lugar de estudio y exploración durante siglos.', '8k_earth_daymap.jpg', 1),
(4, 'Marte', 'Marte es el cuarto planeta del sistema solar y es conocido por tener una superficie roja y árida. Tiene una atmósfera delgada y es más pequeño que la Tierra, lo que significa que tiene menos gravedad. Marte es conocido por tener grandes cañones, montañas y dunas de arena, así como también un número de cráteres de impacto. Se cree que en el pasado Marte tuvo un ambiente más cálido y húmedo, y hay evidencia de que había agua líquida en la superficie. Actualmente, Marte es un lugar desolado y frío, y se está investigando como posible lugar para la colonización humana en el futuro.', '8k_mars.jpg', 2),
(5, 'Júpiter', 'Marte es el cuarto planeta del sistema solar y es conocido por tener una superficie roja y árida. Tiene una atmósfera delgada y es más pequeño que la Tierra, lo que significa que tiene menos gravedad. Marte es conocido por tener grandes cañones, montañas y dunas de arena, así como también un número de cráteres de impacto. Se cree que en el pasado Marte tuvo un ambiente más cálido y húmedo, y hay evidencia de que había agua líquida en la superficie. Actualmente, Marte es un lugar desolado y frío, y se está investigando como posible lugar para la colonización humana en el futuro.', '8k_jupiter.jpg', 67),
(6, 'Saturno', 'Saturno es el sexto planeta del sistema solar y es conocido por tener una gran lluvia de anillos de hielo y polvo que lo rodean. Es el segundo planeta más grande del sistema solar y tiene una masa 95 veces mayor que la de la Tierra. Saturno es un gas gigante compuesto principalmente de hidrógeno y helio, y su atmósfera es conocida por tener grandes sistemas de nubes y vientos muy rápidos. Saturno es también conocido por tener un gran número de lunas, incluyendo Titán, que es la segunda luna más grande del sistema solar y tiene una atmósfera densa y espesa compuesta principalmente de nitrógeno.', '8k_saturn.jpg', 82),
(7, 'urano', 'Urano es el séptimo planeta del sistema solar y es conocido por ser el primer planeta descubierto en tiempos modernos. Tiene un diámetro casi 4 veces mayor que el de la Tierra y es el tercer planeta más grande del sistema solar. Urano es un gas gigante compuesto principalmente de hidrógeno y helio, y su atmósfera es conocida por tener nubes y vientos muy rápidos. Urano es conocido por tener un eje de rotación muy inclinado, lo que significa que tiene una rotación muy lenta y que sus estaciones duran muchos años. Urano también tiene un gran número de lunas y anillos de polvo y hielo.', '2k_uranus.jpg', 27),
(8, 'neptuno', 'Neptuno es el octavo planeta del sistema solar y es conocido por tener una atmósfera azul y una gran mancha oscura en su superficie. Tiene un diámetro casi 3 veces mayor que el de la Tierra y es el cuarto planeta más grande del sistema solar. Neptuno es un gas gigante compuesto principalmente de hidrógeno y helio, y su atmósfera es conocida por tener nubes y vientos muy rápidos. Neptuno es conocido por tener un gran número de lunas y anillos de polvo y hielo. A pesar de ser un planeta frío y oscuro, se cree que Neptuno tiene un océano líquido debajo de su superficie congelada y puede tener formas de vida.', '2k_neptune.jpg', 13),
(9, 'Plutón', 'Plutón es un pequeño y lejano planeta enano del sistema solar que orbita el Sol en una órbita muy elíptica y que a veces es más cercano al Sol que Neptuno. Plutón es conocido por tener una superficie árida y rocosa cubierta de hielo de metano y etano, y tiene una atmósfera delgada compuesta principalmente de nitrógeno. Plutón es el cuerpo celeste más pequeño del sistema solar que ha sido designado como un planeta, y es el sistema binario más grande del sistema solar junto con su luna Caronte. A pesar de que Plutón fue considerado durante mucho tiempo como el noveno planeta del sistema solar, fue reclasificado como un planeta enano en 2006 debido a su pequeño tamaño y órbita única.', 'pluto.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Satelites`
--

CREATE TABLE `Satelites` (
  `id` int(100) NOT NULL,
  `nombreplaneta` varchar(2500) NOT NULL,
  `nombreluna` varchar(2500) NOT NULL,
  `descripcion` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Satelites`
--

INSERT INTO `Satelites` (`id`, `nombreplaneta`, `nombreluna`, `descripcion`) VALUES
(1, 'Tierra', 'Luna', 'a Luna es el único satélite natural de la Tierra. Con un diámetro ecuatorial de 3474.8 km, es el quinto satélite más grande del sistema solar,'),
(2, 'Marte', 'Fobos', 'ffffffffffffffffffffffffff'),
(126, 'Marte ', 'Deimos', ''),
(134, 'Jupiter', 'Europa', ''),
(135, 'Jupiter', 'io', ''),
(136, 'Jupiter', 'ganimedes', ''),
(137, 'Jupiter', 'calisto', ''),
(138, 'Saturno', 'encelado', ''),
(139, 'Saturno', 'mimas', ''),
(140, 'Saturno', 'titan', ''),
(141, 'Saturno', 'tetis', ''),
(142, 'Urano', 'triton', ''),
(143, 'Neptuno', 'umbriel', ''),
(144, 'Neptuno', 'titania', ''),
(145, 'Neptuno', 'oberon', ''),
(146, 'Neptuno', 'ariel', ''),
(147, 'Neptuno', 'miranda', ''),
(148, 'Pluton', 'caronte', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Estrellas`
--
ALTER TABLE `Estrellas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Planetas`
--
ALTER TABLE `Planetas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Satelites`
--
ALTER TABLE `Satelites`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Estrellas`
--
ALTER TABLE `Estrellas`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `Planetas`
--
ALTER TABLE `Planetas`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT de la tabla `Satelites`
--
ALTER TABLE `Satelites`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
