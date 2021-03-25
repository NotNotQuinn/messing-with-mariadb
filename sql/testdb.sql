-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.5.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for testdb
CREATE DATABASE IF NOT EXISTS `testdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `testdb`;

-- Dumping structure for table testdb.users
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` text NOT NULL,
  `FIRST_SEEN` timestamp NOT NULL DEFAULT current_timestamp(),
  `TWITCH_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `TWITCH_ID` (`TWITCH_ID`),
  UNIQUE KEY `NAME` (`NAME`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='Some users I came up with';

-- Dumping data for table testdb.users: ~8 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`ID`, `NAME`, `FIRST_SEEN`, `TWITCH_ID`) VALUES
	(3, 'Hello World', '2021-03-24 19:07:15', 364650448),
	(4, 'The ids are random, and its not checking the names but the api is very clean', '2021-03-24 19:07:42', 483024073),
	(5, 'hi', '2021-03-24 19:32:42', 263956019),
	(6, 'this', '2021-03-24 19:55:06', 925294404),
	(7, 'hii', '2021-03-24 20:35:53', 153431882),
	(8, 'hi :)', '2021-03-24 20:35:56', 903287101),
	(9, 'HI ', '2021-03-24 20:35:57', 642492628),
	(10, 'JHI', '2021-03-24 20:36:00', 63585162);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
