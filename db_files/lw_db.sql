-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3306
-- Létrehozás ideje: 2021. Júl 01. 07:51
-- Kiszolgáló verziója: 10.4.10-MariaDB
-- PHP verzió: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `lwframework`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_pages`
--

DROP TABLE IF EXISTS `_pages`;
CREATE TABLE IF NOT EXISTS `_pages` (
  `PageID` int(11) NOT NULL AUTO_INCREMENT,
  `PageName` varchar(255) NOT NULL,
  `PageUrl` varchar(255) NOT NULL,
  `SceneID` int(11) NOT NULL,
  PRIMARY KEY (`PageID`),
  KEY `SceneID` (`SceneID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `_pages`
--

INSERT INTO `_pages` (`PageID`, `PageName`, `PageUrl`, `SceneID`) VALUES
(1, 'home', 'home', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_page_schemes`
--

DROP TABLE IF EXISTS `_page_schemes`;
CREATE TABLE IF NOT EXISTS `_page_schemes` (
  `PageID` int(11) NOT NULL AUTO_INCREMENT,
  `PageName` varchar(255) NOT NULL,
  `PageContent` text DEFAULT NULL,
  PRIMARY KEY (`PageID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `_page_schemes`
--

INSERT INTO `_page_schemes` (`PageID`, `PageName`, `PageContent`) VALUES
(1, 'view_controller', '<?php namespace Content\\Pages;\r\n\r\n    class replacement_controller {\r\n        public $data;\r\n\r\n    }\r\n\r\n?>'),
(2, 'view', '<?php namespace Content\\Pages;\r\n\r\n    class replacement_view extends replacement_controller {\r\n        public function GetPageContent() {\r\n            echo $this->htmlContent;\r\n        }\r\n\r\n        public function SetPageContent($data) {\r\n            $this->data = $data;\r\n        }\r\n\r\n        public function SetPageHTML($htmlContent) {\r\n            $this->htmlContent = $htmlContent;\r\n        }\r\n    }\r\n\r\n?>'),
(3, 'php_model', '<?php\r\n	class replacement extends replacementController {\r\n	\r\n	}\r\n?>'),
(4, 'php_controller', '<?php\r\n	class replacementController {\r\n	\r\n	}\r\n?>'),
(5, 'ts_class', '\r\nclass replacement {\r\n	\r\n}');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_page_scripts`
--

DROP TABLE IF EXISTS `_page_scripts`;
CREATE TABLE IF NOT EXISTS `_page_scripts` (
  `ScriptID` int(11) NOT NULL AUTO_INCREMENT,
  `PageID` int(11) DEFAULT NULL,
  `ScriptName` varchar(100) DEFAULT NULL,
  `ScriptType` int(11) NOT NULL,
  `IsModule` tinyint(1) NOT NULL,
  PRIMARY KEY (`ScriptID`),
  KEY `ScriptType` (`ScriptType`),
  KEY `PageID` (`PageID`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `_page_scripts`
--

INSERT INTO `_page_scripts` (`ScriptID`, `PageID`, `ScriptName`, `ScriptType`, `IsModule`) VALUES
(1, NULL, 'jquery.min.js', 2, 0),
(2, NULL, 'sha512.min.js', 2, 0),
(18, NULL, 'lazySizes.executer.js', 2, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_scenes`
--

DROP TABLE IF EXISTS `_scenes`;
CREATE TABLE IF NOT EXISTS `_scenes` (
  `SceneID` int(11) NOT NULL AUTO_INCREMENT,
  `SceneName` varchar(255) DEFAULT NULL,
  `SceneUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`SceneID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `_scenes`
--

INSERT INTO `_scenes` (`SceneID`, `SceneName`, `SceneUrl`) VALUES
(1, 'public', 'public');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `_script_types`
--

DROP TABLE IF EXISTS `_script_types`;
CREATE TABLE IF NOT EXISTS `_script_types` (
  `TypeID` int(11) NOT NULL AUTO_INCREMENT,
  `TypeName` varchar(255) NOT NULL,
  PRIMARY KEY (`TypeID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `_script_types`
--

INSERT INTO `_script_types` (`TypeID`, `TypeName`) VALUES
(1, 'local scripts'),
(2, 'global scripts');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
