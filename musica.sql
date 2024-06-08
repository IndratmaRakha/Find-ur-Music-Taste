-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 06, 2024 at 06:48 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musica`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_artis`
--

CREATE TABLE `tb_artis` (
  `id_artis` int NOT NULL,
  `nama` varchar(255) NOT NULL,
  `total_lagu` int NOT NULL,
  `total_album` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_artis`
--

INSERT INTO `tb_artis` (`id_artis`, `nama`, `total_lagu`, `total_album`) VALUES
(2, 'Lisa', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tb_lagu`
--

CREATE TABLE `tb_lagu` (
  `id_lagu` int NOT NULL,
  `artis` varchar(255) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `album` varchar(255) NOT NULL,
  `rilis` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_lagu`
--

INSERT INTO `tb_lagu` (`id_lagu`, `artis`, `judul`, `album`, `rilis`) VALUES
(1, 'Lisa', 'Money', 'LALISA', '2024-06-22');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id`, `email`, `password`, `username`) VALUES
(1, 'totpiken@gmail.com', '$2y$10$fpqjzUrEBcq/SqAebpX2HOqE7GRAbToQwaw459edIbukq4DqGRDSy', 'piki');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_artis`
--
ALTER TABLE `tb_artis`
  ADD PRIMARY KEY (`id_artis`);

--
-- Indexes for table `tb_lagu`
--
ALTER TABLE `tb_lagu`
  ADD PRIMARY KEY (`id_lagu`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_artis`
--
ALTER TABLE `tb_artis`
  MODIFY `id_artis` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_lagu`
--
ALTER TABLE `tb_lagu`
  MODIFY `id_lagu` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
