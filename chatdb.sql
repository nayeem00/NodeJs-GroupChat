-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2017 at 09:30 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `chathistory`
--

CREATE TABLE `chathistory` (
  `userid` int(11) NOT NULL,
  `message` varchar(256) NOT NULL,
  `time` varchar(256) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chathistory`
--

INSERT INTO `chathistory` (`userid`, `message`, `time`, `id`) VALUES
(2, 'dd', '01:00 p.m.', 163),
(8, 'sss', '01:01 p.m.', 164),
(2, 'sss', '01:01 p.m.', 165),
(2, 'hiohiohioh', '01:04 p.m.', 166),
(2, 'gfdd', '01:04 p.m.', 167),
(2, 'hello\n', '12:44 a.m.', 168),
(2, 'hiis\n', '12:44 a.m.', 170),
(2, 'opiod\n', '12:44 a.m.', 171),
(2, 'dijd\n', '12:44 a.m.', 172),
(14, 'Khela hobe?\n', '12:44 a.m.', 173),
(2, 'khela kiser\n', '12:44 a.m.', 174),
(2, 'uuddudu\n', '12:44 a.m.', 175),
(14, 'darun to :D\n', '12:44 a.m.', 176),
(2, 'helll\n', '12:44 a.m.', 177),
(14, 'Bhal lagse beopar ta\n', '12:45 a.m.', 178),
(14, 'bepar*\n', '12:45 a.m.', 179),
(2, 'ok bye\n', '12:45 a.m.', 180),
(14, 'good night\n', '12:45 a.m.', 181),
(10, 'dddd\n', '07:29 p.m.', 182),
(2, 'ok?\n', '10:08 p.m.', 183);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(256) NOT NULL,
  `fullaname` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `photo` varchar(256) NOT NULL,
  `ConnectionID` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fullaname`, `password`, `photo`, `ConnectionID`) VALUES
(2, 'nayeem', 'Nayeem Hossain', '1234', '9a2d997d8e25fd6b54feb021addafc461492969897716.jpeg', '0'),
(7, 'alamgir', 'Alamgir Hossain', '123456', '4c541a77558ab43da481488f4fa30e8b1492986249817.jpeg', '0'),
(8, 'tipu', 'Tipu', '123456', 'c00c87557feb2d4e289ad586a1ecd2bf1492986583673.jpeg', '0'),
(10, 'nayeem00', 'Nayeem Hossain', '1234', '252aca2c913763a3ff40c380e0c197891493048548985.png', 'x_szbHsryIQAyCEzAAAC'),
(12, 'nazmul', 'nazmul', 'nazmul12345', '8b5cfe56359810068ae17d6454e83f891493049211390.jpeg', '0'),
(13, 'anower', 'anu', '623452', '197089fc07bee63f36316557b8c0d7c41493051344350.jpeg', '0'),
(14, 'rktuhinbd', 'Md. Rejaul Karim', '1a3g5m', 'cfd1045f6675444a28fe8bc6788192ce1493145818740.jpeg', '0'),
(15, 'jaidBin', 'Md. Jaid Bin Hashem', '123456', '3e982ee17e39b0f4495f60ef72b833ba1493395656758.jpeg', '0'),
(16, 'jaidBin', 'Md. Jaid Bin Hashem', '123456', '2e0848d15f35957f76fce0ef8bb07ce01493395656914.jpeg', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chathistory`
--
ALTER TABLE `chathistory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chathistory`
--
ALTER TABLE `chathistory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=184;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
