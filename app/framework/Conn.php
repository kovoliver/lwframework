<?php namespace FW\Database;
use PDOException;
use PDO;

    class Conn {
        private static $dbServer = "mysql";
        private static $host = "127.0.0.1";
        private static $dbName = "lwframework";
        private static $charset = "utf8";
        private static $userName = "root";
        private static $pass = "";
        public static $conn;

        public static function ConnectToDb() {
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