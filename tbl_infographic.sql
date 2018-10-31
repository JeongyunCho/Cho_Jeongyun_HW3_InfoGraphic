-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- 생성 시간: 18-10-31 04:11
-- 서버 버전: 5.7.21
-- PHP 버전: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `db_youtube`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_infographic`
--

DROP TABLE IF EXISTS `tbl_infographic`;
CREATE TABLE IF NOT EXISTS `tbl_infographic` (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `main_heading` varchar(50) NOT NULL,
  `head_1` varchar(50) NOT NULL,
  `head_2` varchar(80) NOT NULL,
  `head_3` varchar(50) NOT NULL,
  `head_4` varchar(50) NOT NULL,
  `head_5` varchar(50) NOT NULL,
  `element_1` varchar(50) NOT NULL,
  `element_2` varchar(50) NOT NULL,
  `element_3` varchar(50) NOT NULL,
  `element_4` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_infographic`
--

INSERT INTO `tbl_infographic` (`id`, `main_heading`, `head_1`, `head_2`, `head_3`, `head_4`, `head_5`, `element_1`, `element_2`, `element_3`, `element_4`) VALUES
(1, 'Now Search on YouTube', 'Recent Changes in Content Consumption', 'Beyond watching simple videos\r\nVideo-Based Search Service', 'Video Advertising Cost Ranking', 'Time Spent on Leading Apps [Teenager]', 'How did YouTube become popular?', 'Low YouTube Network Fee', 'High-Quality Video', 'Increase in Old Aged Users', 'Increase in Countryside Users');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
