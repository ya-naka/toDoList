-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : mer. 24 mars 2021 à 18:21
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

DELIMITER $$
--
-- Procédures
--
DROP PROCEDURE IF EXISTS `CheckStep`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CheckStep` (`PIdTask` INTEGER)  BEGIN 
	update Step set CheckStep=1 where IdStep=PIdTask;
END$$

DROP PROCEDURE IF EXISTS `CheckTask`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CheckTask` (`PIdTask` INTEGER)  BEGIN 
	update Task set CheckTask=1 where IdTask=PIdTask;
END$$

DROP PROCEDURE IF EXISTS `InsertList`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertList` (`userId` INTEGER, `Title` VARCHAR(30), `Description` VARCHAR(300))  BEGIN 
Insert Into List(userId, Title, Description) Values (userId, Title, Description); 
END$$

DROP PROCEDURE IF EXISTS `InsertTask`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertTask` (`ListId` INTEGER, `Title` VARCHAR(30), `Description` VARCHAR(300), `deadline` DATE)  BEGIN 
Insert Into Task(ListId, Title, Description, Deadline) Values (userId, Title, Description, deadline); 
END$$

DROP PROCEDURE IF EXISTS `InsertUser`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUser` (`FirstName` VARCHAR(30), `LastName` VARCHAR(30), `Email` VARCHAR(50), `Password` VARCHAR(20))  BEGIN 
Insert Into Users(FirstName, LastName, Email, Password) Values (FirstName, LastName, Email, Password); 
END$$

DROP PROCEDURE IF EXISTS `NotCheckStep`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `NotCheckStep` (`PIdStep` INTEGER)  BEGIN 
	update Step set CheckStep=0 where IdStep=PIdStep;
END$$

DROP PROCEDURE IF EXISTS `NotCheckTask`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `NotCheckTask` (`PIdTask` INTEGER)  BEGIN 
	update Task set CheckTask=0 where IdTask=PIdTask;
END$$

DELIMITER ;

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
  KEY `FK_Users_List` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `list`
--

INSERT INTO `list` (`IdList`, `userId`, `Title`, `Description`, `CreationDate`, `ModifyDate`, `DeleteDate`) VALUES
(1, 1, 'montest', 'c\'est un test', '2021-03-24', NULL, NULL);

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
  `checkStep` tinyint(1) DEFAULT NULL,
  `CreationDate` date NOT NULL DEFAULT sysdate(),
  `ModifyDate` date DEFAULT NULL,
  `DeleteDate` date DEFAULT NULL,
  PRIMARY KEY (`IdStep`),
  UNIQUE KEY `UNIQUE_Title` (`Title`),
  KEY `FK_Step_Task` (`TaskId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `IdTask` int(11) NOT NULL AUTO_INCREMENT,
  `ListId` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `CheckTask` tinyint(1) NOT NULL DEFAULT 0,
  `Deadline` date NOT NULL,
  `CreationDate` date NOT NULL DEFAULT sysdate(),
  `ModifyDate` date DEFAULT NULL,
  `DeleteDate` date DEFAULT NULL,
  PRIMARY KEY (`IdTask`),
  UNIQUE KEY `UNIQUE_Title` (`Title`),
  KEY `FK_Task_List` (`ListId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `IdUser` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(30) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `CreationDate` date NOT NULL DEFAULT sysdate(),
  `ModifyDate` date DEFAULT NULL,
  `DeleteDate` date DEFAULT NULL,
  PRIMARY KEY (`IdUser`),
  UNIQUE KEY `UNIQUE_Email` (`Email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`IdUser`, `FirstName`, `LastName`, `Email`, `Password`, `CreationDate`, `ModifyDate`, `DeleteDate`) VALUES
(1, 'test', 'test', 'test@test.fr', 'test', '2021-03-24', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
