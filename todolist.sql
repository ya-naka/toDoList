-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : mer. 24 mars 2021 à 19:29
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `todolist`
--

-- --------------------------------------------------------

--
-- Structure de la table `step`
--

DROP TABLE IF EXISTS `step`;
CREATE TABLE IF NOT EXISTS `step` (
  `IdStep` int(11) NOT NULL AUTO_INCREMENT,
  `TaskId` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `checkStep` tinyint(1) DEFAULT 0,
  `CreationDate` date NOT NULL DEFAULT sysdate(),
  `ModifyDate` date DEFAULT NULL,
  `DeleteDate` date DEFAULT NULL,
  PRIMARY KEY (`IdStep`),
  UNIQUE KEY `UNIQUE_Title` (`Title`),
  KEY `FK_Step_Task` (`TaskId`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `step`
--

INSERT INTO `step` (`IdStep`, `TaskId`, `Title`, `Description`, `checkStep`, `CreationDate`, `ModifyDate`, `DeleteDate`) VALUES
(1, 2, 'step1', 'la step1', 1, '2021-03-24', NULL, NULL),
(2, 2, 'step2', 'la step2', 1, '2021-03-24', NULL, NULL),
(3, 2, 'step3', 'la step3', 1, '2021-03-24', NULL, NULL),
(4, 2, 'step4', 'la step4', 1, '2021-03-24', NULL, NULL),
(5, 2, 'step5', 'la step5', 1, '2021-03-24', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
