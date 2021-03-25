-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : jeu. 25 mars 2021 à 10:29
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
-- Structure de la table `list`
--

DROP TABLE IF EXISTS `list`;
CREATE TABLE IF NOT EXISTS `list` (
  `IdList` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `CreationDate` date NOT NULL DEFAULT sysdate(),
  `ModifyDate` date DEFAULT NULL,
  `DeleteDate` date DEFAULT NULL,
  PRIMARY KEY (`IdList`),
  UNIQUE KEY `UNIQUE_Title` (`Title`),
  KEY `FK_Users_List` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `list`
--

INSERT INTO `list` (`IdList`, `userId`, `Title`, `Description`, `CreationDate`, `ModifyDate`, `DeleteDate`) VALUES
(3, 3, 'bdd', 'liste des tâches pour créer la bdd', '2021-03-24', NULL, NULL),
(6, 3, 'bdd2', 'la base de données 2', '2021-03-25', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
