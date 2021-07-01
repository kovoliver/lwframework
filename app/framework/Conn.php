<?php namespace FW\Database;
use PDOException;
use PDO;

    class Conn {
        private static $dbServer;
        private static $host;
        private static $dbName;
        private static $charset;
        private static $userName;
        private static $pass;
        public static $conn;

        public static function ConnectToDb() {
            self::$dbServer = "mysql";
            self::$host = SETTINGS["dbHost"];
            self::$dbName = SETTINGS["dbName"];
            self::$charset = SETTINGS["dbCharset"];
            self::$userName = SETTINGS["dbUserName"];
            self::$pass = SETTINGS["dbPass"];
            
            try {
                self::$conn = new PDO(self::$dbServer . ":host=" . self::$host . ";dbname=" . 
                self::$dbName . ";charset=" . self::$charset . ";", 
                self::$userName, self::$pass);
                self::$conn->exec("set names utf8");
                self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $ex) {
                die("Database connection failed, because of this error: {$ex->getMessage()}");
            }
        }

        public static function GetConnection() {
            return self::$conn;
        }
    }

    Conn::ConnectToDb();

?>
