-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sty 30, 2024 at 09:05 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sklepzoologiczny`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `artykuly`
--

CREATE TABLE `artykuly` (
  `id` int(11) DEFAULT NULL,
  `nazwa` text DEFAULT NULL,
  `opis` text DEFAULT NULL,
  `cena` int(11) DEFAULT NULL,
  `ilosc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `artykuly`
--

INSERT INTO `artykuly` (`id`, `nazwa`, `opis`, `cena`, `ilosc`) VALUES
(1, 'karma dla kota', 'drobiowa karma dla kota', 13, 193),
(2, 'karma dla psa', 'mokra karma dla psa w worku', 23, 103),
(3, 'ziarno dla ptakow', 'ziarna naaturalne bez konserwantow', 31, 23),
(4, 'siano dla swinek morskich', 'siano', 44, 123);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
